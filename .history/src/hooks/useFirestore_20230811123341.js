import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // When there is a change in this collection --> callback of onSnapshot is executed
    let collectionRef = db.collection(collection).orderBy("createdAt");

    // Condition
    // {
    //   fieldName: 'abc',
    //    operator: '=='
    //    compareValue: 'adb'
    // }
    //
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    return unsubscribe;
  }, [collection, condition]);

  // New: Add a removeDocument function
  const removeDocument = async (docId) => {
    try {
      await db.collection(collection).doc(docId).delete();
      console.log("Document removed successfully!");
    } catch (error) {
      console.error("Error removing document:", error);
    }
  };

  return documents;
};

export default useFirestore;
