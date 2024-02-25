const addBtn = document.getElementById('add-btn');
const dit = [
    {
        name: 'Diploma',
        arr: [
            {
                name: 'Computer Science',
                arr: [
                    {
                        name: 'Sem 1',
                        arr: []
                    },
                    {
                        name: 'Sem 2',
                        arr: []
                    },
                    {
                        name: 'Sem 3',
                        arr: []
            
                    },
                    {
                        name: 'Sem 4',
                        arr: []
                    },
                    {
                        name: 'Sem 5',
                        arr: []
                    },
                    {
                        name: 'Sem 6',
                        arr: []
                    }
                ]
            },
            {
                name: 'Mechanical Engineering',
                arr: [
                    {
                        name: 'Sem 1',
                        arr: []
                    },
                    {
                        name: 'Sem 2',
                        arr: []
                    },
                    {
                        name: 'Sem 3',
                        arr: []
            
                    },
                    {
                        name: 'Sem 4',
                        arr: []
                    },
                    {
                        name: 'Sem 5',
                        arr: []
                    },
                    {
                        name: 'Sem 6',
                        arr: []
                    }
                ]
            },
            {
                name: 'Electronics Communications',
                arr: [
                    {
                        name: 'Sem 1',
                        arr: []
                    },
                    {
                        name: 'Sem 2',
                        arr: []
                    },
                    {
                        name: 'Sem 3',
                        arr: []
            
                    },
                    {
                        name: 'Sem 4',
                        arr: []
                    },
                    {
                        name: 'Sem 5',
                        arr: []
                    },
                    {
                        name: 'Sem 6',
                        arr: []
                    }
                ]
            },
            {
                name: 'Civil Engineering',
                arr: [
                    {
                        name: 'Sem 1',
                        arr: []
                    },
                    {
                        name: 'Sem 2',
                        arr: []
                    },
                    {
                        name: 'Sem 3',
                        arr: []
            
                    },
                    {
                        name: 'Sem 4',
                        arr: []
                    },
                    {
                        name: 'Sem 5',
                        arr: []
                    },
                    {
                        name: 'Sem 6',
                        arr: []
                    }
                ]
            }
        ]
    },
    {
        name: 'PUC',
        arr: []
    }
]

function add(arr) {
    addBtn.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        div.className = 'btn-box';
        div.textContent = arr[i].name;
        div.addEventListener('click', () => {
            add(arr[i].arr);
        });
        addBtn.appendChild(div);
    }
}
add(dit);
