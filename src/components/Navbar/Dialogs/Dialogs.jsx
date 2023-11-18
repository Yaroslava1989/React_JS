import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return ( <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <div className={s.dialog +' '+ s.active}>
                      <NavLink to="/dialogs/1">Yaroslava</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/2">Baby Mochi</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/3">Banny</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/4">WWH</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/5">The Sun</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/6">Best Leader</NavLink>
                  </div>
              </div>
              <div className={s.messages}>
                  <div className={s.message}>Hi!</div>
                  <div className={s.message}>How is youre day?</div>
                  <div className={s.message}>How is youre it-kamasutra?</div>
              </div>
              </div>
            );
}

export default Dialogs;