import { DocumentAtomSdk } from 'document-atom-sdk';

var api = new DocumentAtomSdk('http://localhost:8000/');

const detectType = async () => {
  try {
    const type = await api.TypeDetection.detectType(`D:/test.jpg`, new AbortController());
    console.log(type);
  } catch (error) {
    console.log(error, 'error');
  }
};

detectType();
