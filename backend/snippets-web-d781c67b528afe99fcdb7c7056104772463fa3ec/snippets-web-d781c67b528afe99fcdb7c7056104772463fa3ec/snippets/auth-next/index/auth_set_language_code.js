// This snippet file was generated by processing the source file:
// ./auth-next/index.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_set_language_code_modular]
import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
// [END auth_set_language_code_modular]