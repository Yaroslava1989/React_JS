import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    return (
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
            );
}

const Messages = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );

}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Yaroslava'},
        {id: 2, name: 'Baby Mochi'},
        {id: 3, name: 'Banny'},
        {id: 4, name: 'WWH'},
        {id: 5, name: 'The Sun'},
        {id: 6, name: 'Beast Leader'},
    ]

    let dialogsElements = [
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is youre day?'},
        {id: 3, message: 'How is youre it-kamasutra?'},
    ]
    return ( <div className={s.dialogs}>
              <div className={s.dialogsItems}>

                  {dialogsElements}
                 {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                  <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
*/}

              </div>
              <div className={s.messages}>
                  {/*<Messages message={messagesData[0].message}/>*/}
                  {/*<Messages message={messagesData[1].message}/>*/}
              </div>
              </div>
            );
}

export default Dialogs;