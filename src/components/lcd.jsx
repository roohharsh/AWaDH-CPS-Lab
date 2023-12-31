import React from 'react';
import '../css/items.css';
import Lcd from '../images/lcd.png';

const LCD = () => {
    return (
        <div className="items">
            <div className="heading">
                LCD 16x2
            </div>
            <div className="image lcd">
                <img src={Lcd} alt="LCD 16x2" />
            </div>
            <div className="text">
                <div>
                    16×2 LCD is one kind of electronic device used to display messages and data. The term LCD full
                    form is Liquid Crystal Display. The display is named 16×2 LCD because it has 16 Columns and
                    2 Rows. It can be displayed (16×2=32) 32 characters in total and each character will be made of
                    5×8 Pixel Dots. These displays are mainly based on multi-segment light-emitting diodes. There
                    are a lot of combinations of displays available in the market like 8×1, 8×2, 10×2, 16×1, etc. but
                    the 16×2 LCD is widely used. These LCD modules are low cost, and programmer-friendly,
                    therefore, are used in various DIY circuits, devices, and embedded projects.
                </div>
            </div>
        </div>
    );
};

export default LCD;
