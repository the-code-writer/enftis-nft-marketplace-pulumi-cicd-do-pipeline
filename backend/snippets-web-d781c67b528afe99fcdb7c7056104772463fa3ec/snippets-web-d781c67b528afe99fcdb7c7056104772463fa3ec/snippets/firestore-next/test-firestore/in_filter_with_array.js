// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START in_filter_with_array_modular]
import { query, where } from "firebase/firestore";  

const q = query(citiesRef, where('regions', 'in', [['west_coast', 'east_coast']]));
// [END in_filter_with_array_modular]