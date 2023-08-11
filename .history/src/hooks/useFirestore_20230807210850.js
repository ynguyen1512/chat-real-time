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
      if (!condition.compareValue || condition.compareValue.length) {
        return;
      }
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.value
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

  return documents;
};

export default useFirestore;
