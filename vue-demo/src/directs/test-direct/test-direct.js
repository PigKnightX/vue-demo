
export default {
  name: 'test-direct',

  inserted(el) {
    console.log('test-direct: inserted');
    el.style.backgroundColor = 'blue'
  }
}
