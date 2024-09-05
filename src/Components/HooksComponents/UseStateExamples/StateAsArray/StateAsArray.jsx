import React, { useState } from 'react'

function StateAsArray() {

    const [items, setItems] = useState([
        { 
            id: 1,
            name: "Mohamed",
            age: 30,
            collage: "Ain Shams"
        },
        { 
            id: 2,
            name: "Ahmed",
            age: 20,
            collage: "Cairo"
        },
        { 
            id: 3,
            name: "Sara",
            age: 26,
            collage: "AUC"
        },
        { 
            id: 4,
            name: "Mo2men Ahmed",
            age: 28,
            collage: "GUC"
        },
        { 
            id: 5,
            name: "Eman",
            age: 22,
            collage: "SUC"
        },        
        { 
            id: 6,
            name: "Gehad",
            age: 23,
            collage: "CIC"
        }

    ])

    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length + 1,
                name: `Mohamed ${items.length}`,
                age: 20 + items.length,
                collage: `Ain Shams`
            }
        ])
    }

  return (
    <div>
        <button onClick={addItem}>Add an Item</button>
        <ul style={{display: 'flex', flexDirection: 'column', gap:"20px"}}>
            {items.map((item, index) =>
                (
                    <div key={item.id} style={{display: 'flex', flexDirection: 'column', backgroundColor:"green"}}>
                        <li>
                            <span>{item.name}</span>
                            <p>{item.age}</p>
                            <section>{item.collage}</section>
                        </li>
                    </div>

                )
            )}
        </ul>
    </div>
  )
}

export default StateAsArray