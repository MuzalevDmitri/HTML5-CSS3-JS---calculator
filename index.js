function insert(num) {
  document.form.textview.value =  document.form.textview.value+num
}


function equal() {
  var exp = document.form.textview.value;
  if(exp) {
    document.form.textview.value = eval(exp)
    }
  }


  function clean() {
    document.form.textview.value="";

  }


  function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);


  }


  function sin() {
    var x = document.form.textview.value;
    document.form.textview.value = Math.sin(x);


  }



    function cos() {
      var x = document.form.textview.value;
      document.form.textview.value = Math.cos(x);


    }

    function sqrt() {
      var x = document.form.textview.value;
      document.form.textview.value = Math.sqrt(x);


    }

    function sq() {
      var x = document.form.textview.value;
      document.form.textview.value = Math.pow(x,2);
}

function tan() {
  var x = document.form.textview.value;
  document.form.textview.value = Math.tan(x);
}
