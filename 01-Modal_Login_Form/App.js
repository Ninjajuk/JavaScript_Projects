  const handleModal = () => {
      var modal = document.getElementById('modalId');
      if (modal.style.display == "none" || modal.style.display == "") {
        modal.style.display = "block";
      }else{
        modal.style.display = "none";
      }
    }
