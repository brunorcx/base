async function getUsuarios(dbCategories) {
  await axios
    .get(dbCategories)
    .then(result => {
      setCategories(result.data);
    })
    .catch(error => {
      console.log(error);
    });
}