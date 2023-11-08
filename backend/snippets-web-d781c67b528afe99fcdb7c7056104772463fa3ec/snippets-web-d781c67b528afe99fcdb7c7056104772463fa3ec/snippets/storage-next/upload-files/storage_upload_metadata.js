// This snippet file was generated by processing the source file:
// ./storage-next/upload-files.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START storage_upload_metadata_modular]
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'images/mountains.jpg');

// Create file metadata including the content type
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, file, metadata);
// [END storage_upload_metadata_modular]