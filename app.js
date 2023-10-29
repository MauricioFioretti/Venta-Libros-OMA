import uploadData from 'upload-json-mock-firebase'
import data from './data.json' assert { type: 'json' }


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG2ztNsg4bcF0Cyby4DBR800AwpwoRP_A",
  authDomain: "venta-libros-oma.firebaseapp.com",
  projectId: "venta-libros-oma",
  storageBucket: "venta-libros-oma.appspot.com",
  messagingSenderId: "548184142012",
  appId: "1:548184142012:web:b704ba42c854d6c7a920b9"
};

const collectionName = 'productos'

uploadData(firebaseConfig, data, collectionName )