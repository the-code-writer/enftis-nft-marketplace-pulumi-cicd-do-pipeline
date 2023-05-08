// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

/*********************************** Imports **********************************/

import "./ERC721FactoryBase.sol";
import "./ERC721FactoryWorker.sol";
import "./ERC721FactoryMinter.sol";
import "./ERC721FactoryBurner.sol";

/**
 * @dev {ERC721} token, including:
 *
 *  - deploy with upgradeability, replaced constructors with initializer functions
 *  - a admin role that allows for token minting (creation)
 *  - royalty information See {ERC721Royalty}.
 *  - token ID and URI autogeneration
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles
 *
 */

contract ERC721FactoryGetSet is
    ERC721FactoryBase,
    ERC721FactoryWorker,
    ERC721FactoryMinter,
    ERC721FactoryBurner
{
    using Counters for Counters.Counter;

    /**
     * Constructor arguments for erc721 implementation.
     *
     * @param _name contract token name
     * @param _symbol contract token symbol
     * @param _data encoded parameters
     */
    constructor (
        string memory _name,
        string memory _symbol,
        bytes memory _data
    ) payable ERC721FactoryBase(_name, _symbol) {

        /**
         * initializer arguments for erc721 implementation.
         *
         * @param _name encoded parameters
         * @param _symbol encoded parameters
         * @param _contractURI encoded parameters
         * @param _baseUri encoded parameters
         * @param _tokenMaximumSupply encoded parameters
         * @param _royaltyFraction encoded parameters
         * @param _royaltyReceiver encoded parameters
         * @param _admins encoded parameters
         * @param _minters encoded parameters
         * @param _mintingFee encoded parameters
         * @param _isPausable encoded parameters
         * @param _isBurnable encoded parameters
         */
        (
            string memory _contractURI,
            string memory _baseUri,
            uint256 _tokenMaximumSupply,
            uint96 _royaltyFraction,
            address _royaltyReceiver,
            address[] memory _admins,
            address[] memory _minters,
            uint256 _mintingFee,
            bool _isPausable,
            bool _isBurnable
        ) = abi.decode(
                _data,
                (
                    string,
                    string,
                    uint256,
                    uint96,
                    address,
                    address[],
                    address[],
                    uint256,
                    bool,
                    bool
                )
            );

        address[] memory adminsArray = _admins;
        uint256 adminsLength = _admins.length;

        address[] memory mintersArray = _minters;
        uint256 mintersLength = _minters.length;

        // Revert if we do not have admins
        if (adminsLength == 0) {
            revert Errors.NoAdmins({message: NO_ADMINS_SPECIFIED});
        }

        // Revert if we do not have minters
        if (mintersLength == 0) {
            revert Errors.NoMinters({message: NO_MINTERS_SPECIFIED});
        }

        // setup admin roles
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        for (uint256 i; i < adminsLength; ++i) {
            _setupRole(ADMIN_ROLE, adminsArray[i]);
        }

        // setup admin role
        _setRoleAdmin(MINTER_ROLE, MINTER_ROLE);
        for (uint256 i; i < mintersLength; ++i) {
            _setupRole(MINTER_ROLE, mintersArray[i]);
        }

        // _tokenMaximumSupply of 0 implies no limit
        if (_tokenMaximumSupply != 0) {
            tokenMaximumSupply = _tokenMaximumSupply;
        } else {
            tokenMaximumSupply = type(uint256).max;
        }

        // setup the royalties receiver for each secondary purchase and above
        if (_royaltyFraction != 0 && _royaltyReceiver != address(0)) {
            royaltiesEnabled = true;
            royaltyReceiver = payable(_royaltyReceiver);
            royaltyFraction = _royaltyFraction;
            _setDefaultRoyalty(_royaltyReceiver, _royaltyFraction);
        }

        // setup states
        baseTokenURI = _baseUri;
        
        contractURI = _contractURI;
        mintingFee = _mintingFee;
        
        contractOptionsStruct = ContractOptions(_isPausable, _isBurnable);

        owner = payable(_msgSender());
        
    }

    /******************************* Read Functions *******************************/

    /**
     * @dev Returns the base uri of the contract.
     * @return string base uri of the contract.
     *
     */
    function getBaseURI() external view returns (string memory) {
        return baseTokenURI;
    }

    /**
     * @dev Returns current _owner address. This is only for compatibility for opensea and other protocols.
     * @return address address of the _owner address. Used just for compatibility with other protocols.
     *
     */
    function getContractURI() external view returns (string memory) {
        return contractURI;
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     * @param _tokenId tokenId.
     * @return string uri of the tokenId.
     *
     */
    function getTokenURI(
        uint256 _tokenId
    ) external view returns (string memory) {
        return tokenURI(_tokenId);
    }

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function getTokenCurrentId() external view returns (uint256) {
        return _tokenIdCounter.current();
    }

    /**
     * @dev Returns current _owner address. This is only for compatibility for opensea and other protocols.
     * @return owner of the _owner address. Used just for compatibility with other protocols.
     *
     */
    function getOwner() external view returns (address owner) {}

    /**
     * @dev Returns current _owner address. This is only for compatibility for opensea and other protocols.
     * @return royaltiesEnabled of the _owner address. Used just for compatibility with other protocols.
     *
     */
    function collectionRoyaltiesEnabled() external view returns (bool royaltiesEnabled) {}

    /**
     * @dev Returns current _owner address. This is only for compatibility for opensea and other protocols.
     * @return royaltyFraction of the _owner address. Used just for compatibility with other protocols.
     *
     */
    function getRoyaltyFraction() external view returns (uint96 royaltyFraction) {}

    /**
     * @dev Returns current _owner address. This is only for compatibility for opensea and other protocols.
     * @return royaltyReceiver of the _owner address. Used just for compatibility with other protocols.
     *
     */
    function getRoyaltyReceiver() external view returns (address royaltyReceiver) {}

    /**
     * @dev Returns current _owner address. This is only for compatibility for opensea and other protocols.
     * @return marketplaceAddress of the _owner address. Used just for compatibility with other protocols.
     *
     */
    function getMarketplaceAddress() external view returns (address marketplaceAddress) {}

    /**
     * @dev Retrieves the royalty info of a token.
     * @param _tokenId the id of the token.
     * @param price the price of the token.
     * @return royaltyItemStruct the royalty info of the token.
     */
    function getTokenRoyaltyInfo(
        uint256 _tokenId,
        uint256 price
    )
        external
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (Structs.RoyaltyItem memory)
    {
        (address _royaltyReceiver, uint256 _royaltyAmount) = royaltyInfo(
            _tokenId,
            price
        );

        Structs.RoyaltyItem memory _royaltyItemStruct;

        if (_royaltyAmount != 0 && _royaltyReceiver != address(0)) {
            _royaltyItemStruct = Structs.RoyaltyItem(
                true,
                payable(_royaltyReceiver),
                (_royaltyAmount / price) * _feeDenominator(),
                _royaltyAmount,
                _tokenId
            );
        } else {
            _royaltyItemStruct = Structs.RoyaltyItem(false, address(0), 0, 0, 0);
        }

        //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md

        delete _royaltyReceiver;
        delete _royaltyAmount;

        return _royaltyItemStruct;
    }

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     * @param tokenMaximumSupply - efkj
     *
     */
    function getTokenMaximumSupply() external view returns (uint256 tokenMaximumSupply) {}

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function getTokenCurrentSupply() external view returns (uint256) {
        return _tokenCurrentSupply.current();
    }

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     * @param tokenCategory : jf
     */
    function getTokenCategory() external view returns (Enums.TokenCategory tokenCategory) {}

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function getTokenMintingFee() external view returns (uint256) {
        return mintingFee;
    }

    /**
     * @dev Retrieves and array of tokens owned by caller.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensOwnedByMe() external view returns (Structs.NFTItem[] memory) {
        return _search("owner", abi.encode(_msgSender()));
    }

    /**
     * @dev Retrieves and array of tokens owned by an address.
     * @param _account account address that owns the token.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensOwnedByAddress(
        address _account
    ) external view returns (Structs.NFTItem[] memory) {
        return _search("owner", abi.encode(_account));
    }

    /**
     * @dev Retrieves and array of tokens created by caller
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensCreatedByMe() external view returns (Structs.NFTItem[] memory) {
        return _search("creator", abi.encode(_msgSender()));
    }

    /**
     * @dev Retrieves and array of tokens created by an address.
     * @param _account account address that created the token.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensCreatedByAddress(
        address _account
    ) external view returns (Structs.NFTItem[] memory) {
        return _search("creator", abi.encode(_account));
    }

    /**
     * @dev Retrieves and array of tokens minted by caller.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensMintedByMe() external view returns (Structs.NFTItem[] memory) {
        return _search("minter", abi.encode(_msgSender()));
    }

    /**
     * @dev Retrieves and array of tokens minted by an address.
     * @param _account account address that minted the token.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensMintedByAddress(
        address _account
    ) external view returns (Structs.NFTItem[] memory) {
        return _search("minter", abi.encode(_account));
    }

    /**
     * @dev : Get the creator of the token
     * @param _tokenId : The token id to look for
     * @return address
     */
    function getTokenCreator(
        uint256 _tokenId
    )
        external
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (address)
    {
        return _getNFTItem(_tokenId).creatorAddress;
    }

    /**
     * @dev : Get the number of tokens owned by an address
     * @param _tokenId :
     * @return address
     */
    function getTokenOwner(
        uint256 _tokenId
    )
        internal
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (address)
    {
        return ownerOf(_tokenId);
    }

    /**
     * @dev : Get the number of tokens owned by an address
     * @param _account :
     * @return uint256
     */
    function getCountTokensOwned(
        address _account
    ) external view returns (uint256) {
        return balanceOf(_account);
    }

    /**
     * @dev : Get the number of tokens owned by an address
     * @param _tokenId :
     * @return Structs.NFTItem memory
     */
    function getNFTItem(
        uint256 _tokenId
    ) 
    external 
    view 
    validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
    returns (Structs.NFTItem memory) {
        return _getNFTItem(_tokenId);
    }

    /**
     * @dev : Get the number of tokens owned by an address
     * @param _tokenId :
     * @return Structs.NFTItem memory
     */
    function _getNFTItem(
        uint256 _tokenId
    )
        internal
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (Structs.NFTItem memory)
    {
        return tokenIdToNFTItem[_tokenId];
    }

    /**
     * @dev : Get the number of tokens owned by an address
     * @param _tokenId :
     * @return Structs.NFTItem memory, TokenActivityItem[] memory
     */
    function getNFTItemFull(
        uint256 _tokenId
    )
        external
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (Structs.NFTItem memory, Structs.TokenActivityItem[] memory)
    {
        return (_getNFTItem(_tokenId), getTokenAuditTrail(_tokenId));
    }

    /**
     * @dev : Get the number of tokens owned by an address
     * @param _tokenId :
     * @return TokenActivityItem[] memory
     */
    function getTokenAuditTrail(
        uint256 _tokenId
    ) 
    public 
    view 
    validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
    returns (Structs.TokenActivityItem[] memory) {
        return tokenIdToTokenActivityItem[_tokenId];
    }

    /**
     * @dev :
     * @return Structs.NFTItem[] :
     */
    function getNFTItems() external view returns (Structs.NFTItem[] memory) {
        return _tokens();
    }

    /**
     * @dev :
     * @return memory :
     */
    function collectionName() external view returns (string memory ) {
        return name();
    }

    /**
     * @dev :
     * @return memory :
     */
    function collectionSymbol() external view returns (string memory) {
        return symbol();
    }

    /**
     * @dev :
     * @return tokenMaximumSupply
     */
    function collectionMaxSupply() external view returns (uint256 tokenMaximumSupply) {}

    /**
     * @dev :
     * @return description :
     */
    function collectionDescription() external view returns (string memory description) {}

    /**
     * @dev :
     * @return photoURL :
     */
    function collectionDisplayPicture() external view returns (string memory photoURL) {}

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _uint256 The data holds the encoded params to use in the query
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        string calldata _itemKey, 
        uint256 _uint256
    ) public view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(_itemKey, abi.encode(_uint256));

    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _address The data holds the encoded params to use in the query
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        string calldata _itemKey, 
        address _address
    ) external view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(_itemKey, abi.encode(_address));

    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _query The data holds the encoded params to use in the query
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        string calldata _itemKey, 
        string calldata _query
    ) external view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(_itemKey, abi.encode(_query));

    }

    /******************************* Write Functions ******************************/

    /**
     * @dev Pauses token transfers. See {Pausable}.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     * - Only contracts with pausable active can call this method
     */
    function pause() public onlyAdmin pausable {
        _pause();
    }

    /**
     * @dev Unpauses token transfers. See {Pausable}.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     * - Only contracts with pausable active can call this method
     */
    function unpause() public onlyAdmin pausable {
        _unpause();
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setAdminRole(address _account) external onlyAdmin {
        grantRole(ADMIN_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function revokeAdminRole(address _account) external onlyAdmin {
        revokeRole(ADMIN_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function renounceAdminRole(address _account) external onlyAdmin {
        renounceRole(ADMIN_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setMinterRole(address _account) external onlyAdmin {
        grantRole(MINTER_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function revokeMinterRole(address _account) external onlyAdmin {
        revokeRole(MINTER_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function renounceMinterRole(address _account) external onlyAdmin {
        renounceRole(MINTER_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _newBaseURI Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setBaseURI(string calldata _newBaseURI) external onlyAdmin {
        baseTokenURI = _newBaseURI;
        emit Events.BaseURIChanged(_newBaseURI);
    }

    /**
     * @dev Sets the new contract uri for this contract.
     * @param _newContractURI Contract uri of the contract to change to (for contract level metadata).
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setContractURI(
        string calldata _newContractURI
    ) external onlyAdmin {
        /**
         * @title:
         */
        contractURI = _newContractURI;
        emit Events.ContractURIChanged(_newContractURI);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _description Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setCollectionDescription(
        string calldata _description
    ) external onlyAdmin {
        description = _description;
        emit Events.CollectionDescriptionChanged(_description);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _photoURL Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setCollectionDisplayPicture(
        string calldata _photoURL
    ) external onlyAdmin {
        photoURL = _photoURL;
        emit Events.CollectionDisplayPictureChanged(_photoURL);
    }

    /**
     * @dev Sets the new contract uri for this contract.
     * @param _newMarketplaceAddress Contract uri of the contract to change to (for contract level metadata).
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setMarketplaceAddress(
        address _newMarketplaceAddress
    ) external onlyAdmin validAccount(_newMarketplaceAddress) {
        if (marketplaceAddress != address(0)) {
            setApprovalForAll(marketplaceAddress, false);
        }
        marketplaceAddress = payable(_newMarketplaceAddress);
        setApprovalForAll(_newMarketplaceAddress, true);
        emit Events.MarketplaceAddressChanged(_newMarketplaceAddress);
    }

    /**
     * @dev Sets the new contract uri for this contract.
     * @param _account Contract uri of the contract to change to (for contract level metadata).
     * @param _tokenId Contract uri of the contract to change to (for contract level metadata).
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function approveAccountForTokenId(
        address _account,
        uint256 _tokenId
    )
        external
        onlyAdmin
        validAccount(_account)
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
    {
        approve(_account, _tokenId);
    }

    /**
     * @dev Sets the new _owner for this contract. This is only for compatibility for opensea and other protocols.
     * @param _newMintingFee New Owner address to set _owner to.
     *
     * Requirements:
     *
     * - Only Owner can call this method
     */
    function setMintingFee(
        uint256 _newMintingFee
    ) external onlyAdmin nonZeroAmount(_newMintingFee) {
        mintingFee = _newMintingFee;
        emit Events.MintingFeeChanged(_newMintingFee);
    }

    /**
     * @dev Sets the new _owner for this contract. This is only for compatibility for opensea and other protocols.
     * @param _tokenCategoryEnumIndex New Owner address to set _owner to.
     *
     * Requirements:
     *
     * - Only Owner can call this method
     */
    function setTokenCategory(
        Enums.TokenCategory _tokenCategoryEnumIndex
    ) external onlyAdmin {
        tokenCategory = _tokenCategoryEnumIndex;
        emit Events.TokenCategoryChanged(_tokenCategoryEnumIndex);
    }

    /**
     * @dev Sets the new _owner for this contract. This is only for compatibility for opensea and other protocols.
     * @param _newOwner New Owner address to set _owner to.
     *
     * Requirements:
     *
     * - Only Owner can call this method
     */
    function setOwner(
        address _newOwner
    ) external onlyOwner validAccount(_newOwner) {
        owner = payable(_newOwner);
        emit Events.OwnerChanged(_newOwner);
    }
}
