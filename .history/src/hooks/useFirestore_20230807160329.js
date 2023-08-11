export const useFirestore = () => {
  useEffect(() => {
    // When there is a change in this collection --> callback of onSnapshot is executed
    db.collection("rooms").onSnapshot((snapshot) => {
      // Convert data from firebase to javascript
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({ data, snapshot, docs: snapshot.docs });
    });
  }, []);
};
