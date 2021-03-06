
const DEFAULT_OBJECT = {
  foo: 'bar',
  baz: ['qux', 'quux', 'quuz', 'corge'],
}

const items = []

let id = 0

Object.keys(DEFAULT_OBJECT).forEach(x => {
    if (Array.isArray(DEFAULT_OBJECT[x])){
		for (let i = 0; i < DEFAULT_OBJECT[x].length; i++){
			items.push({key: id++, title: x, val: DEFAULT_OBJECT[x][i]})
		}
	}
	else{
		items.push({key: id++, title: x, val: DEFAULT_OBJECT[x]})
	}
});

export default items