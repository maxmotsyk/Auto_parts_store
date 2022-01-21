const prise_slider = document.getElementById('prise_slider');

if(prise_slider){

  noUiSlider.create(prise_slider, {
    start: [0, 99999],
    connect: true,
    step:1,
    range: {
        'min': [0],
        'max': [99999]
    }

  });
  
  const inputs = document.querySelectorAll('.prise_input');

  prise_slider.noUiSlider.on('update', function (values,handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRengeSlider = (index , value) =>{
    let arr = [null,null];
    arr[index] = value;
    prise_slider.noUiSlider.set(arr)
  }

  inputs.forEach((el,index) => {
    el.addEventListener('change',(e) => {
      console.log(e.currentTarget.value);
      setRengeSlider(index,e.currentTarget.value);
    });
  });

}