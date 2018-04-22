# mobileTable
Таблица с мобильной адаптацией средствами js и jQuery

# Зависимости
1. <a href="https://jquery.com/download/" target="_blank">Библиотека jQuery</a>

# Вызов функции
1. (#tableContainer) - айдишник контейнера таблицы.

```javascript

var mobileTable = new MobileTableToggler('#tableContainer');

```

# HTML разметка таблицы
```html
<div class="mobileTable__wrapper" id="tableContainer">
    <div class="mobileTable-mobile">
        <div class="mobileTable-mobile__title">Title #1</div>
        <div class="mobileTable-mobile__arrows">
            <span class="mobileTable-mobile__left" id="prevColumn"></span>
            <span class="mobileTable-mobile__right" id="nextColumn"></span>
        </div>
    </div>
    <table class="mobileTable">
        <tbody>
            <tr>
                <th class="mobileTable__col mobileTable__col_type1"></th>
                <th class="mobileTable__col mobileTable__col_type2 m__visible-col">
                    <span class="mobileTable__col-title">Title #1</span>
                </th>
                <th class="mobileTable__col mobileTable__col_type2">
                    <span class="mobileTable__col-title">Title #2</span>
                </th>
                <th class="mobileTable__col mobileTable__col_type2 m__active-col">
                    <span class="mobileTable__col-title">Title #3</span>
                </th>
                <th class="mobileTable__col mobileTable__col_type2">
                    <span class="mobileTable__col-title">Title #4</span>
                </th>
            </tr>
            <tr>
                <td class="mobileTable__col mobileTable__col_type1">
                    <span class="mobileTable__col-about">Text #1</span>
                </td>
                <td class="mobileTable__col mobileTable__col_type2 m__visible-col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td class="mobileTable__col mobileTable__col_type2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td class="mobileTable__col mobileTable__col_type2 mobileTable__col m__active-col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td class="mobileTable__col mobileTable__col_type2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
            </tr>
            <tr>
                <td class="mobileTable__col mobileTable__col_type1">
                    <span class="mobileTable__col-about">Text #2</span>
                </td>
                <td class="mobileTable__col mobileTable__col_type2 m__visible-col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td class="mobileTable__col mobileTable__col_type2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td class="mobileTable__col mobileTable__col_type2 mobileTable__col m__active-col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td class="mobileTable__col mobileTable__col_type2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

# СSS стили таблицы
```css
.mobileTable {
    width: 100%;
    background: #1b1b1b;
    color: #fff
}

.mobileTable-mobile {
    display: none
}

.mobileTable th.m__active-col {
    color: #000;
}

.mobileTable__radio {
    display: none
}

.mobileTable__col {
    vertical-align: middle;
    padding: 15px;
    border-bottom: 2px solid #232323
}

.mobileTable__col.m__active-col {
    border-bottom: 2px solid #1b1b1b
}

.mobileTable__col_type1 {
    min-width: 360px;
    padding: 15px 0
}

.mobileTable__col_type2 {
    text-align: center;
}

.mobileTable__col-title {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: .7px;
    text-transform: uppercase
}

.mobileTable__col-about {
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
}

.mobileTable__col.m__active-col {
    background: #ff4040;
    color: #000;
}

.mobileTable_main-list-row .mobileTable__col {
    border-bottom: none
}

.mobileTable_row-top-border .mobileTable__col {
    border-top: 2px solid #232323
}

.mobileTable_main-list-row .mobileTable__col.m__active-col {
    border-bottom: none
}

.mobileTable_row-top-border .mobileTable__col.m__active-col {
    border-top: 2px solid #1b1b1b
}

@media screen and (max-width:768px) {
    .mobileTable th {
        display: none
    }
    .mobileTable__wrapper {
        position: relative;
        overflow: hidden;
    }
    .mobileTable-mobile {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-bottom: 1px solid #434343;
        height: 44px
    }
    .mobileTable-mobile__title {
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;
        text-align: center
    }
    .mobileTable-mobile__arrows {
        position: absolute;
        width: 100%;
        left: 0;
        top: 10px;
        z-index: 10
    }
    .mobileTable-mobile__left {
        position: absolute;
        left: 0;
        top: 0;
        width: 15px;
        height: 24px;
        cursor: pointer;
        background: url(../img/arrows.png) 0 0 no-repeat
    }
    .mobileTable-mobile__right {
        position: absolute;
        right: 0;
        top: 0;
        width: 15px;
        height: 24px;
        cursor: pointer;
        background: url(../img/arrows.png) 0 -24px no-repeat
    }
    .mobileTable__col-about {
        font-size: 10px;
        line-height: 10px;
    }
    .mobileTable__col-price {
        font-size: 12px
    }
    .mobileTable__col_type1 {
        width: 75%;
        min-width: 200px;
        padding: 5px 10px
    }
    .mobileTable__col_type2 {
        width: 25%;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        min-width: 90px;
        padding: 5px
    }
    .mobileTable__col_type2.m__visible-col {
        visibility: visible;
        opacity: 1;
        position: relative;
        left: 0
    }
}
```


