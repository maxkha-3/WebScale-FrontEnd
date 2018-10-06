import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    items1 = generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` }));
    items2 = generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` }));
    items3 = generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` }));
    items4 = generateItems(15, (i) => ({ id: '4' + i, data: `Draggable 4 - ${i}` }));

    constructor() {
        this.getChildPayload1 = this.getChildPayload1.bind(this);
        this.getChildPayload2 = this.getChildPayload2.bind(this);
        this.getChildPayload3 = this.getChildPayload3.bind(this);
        this.getChildPayload4 = this.getChildPayload4.bind(this);
    }

    ngOnInit() {

    }

    onDrop(collection, dropResult) {
        this[collection] = applyDrag(this[collection], dropResult);
    }

    getChildPayload1(index) {
        return this.items1[index];
    }
    getChildPayload2(index) {
        return this.items2[index];

    }
    getChildPayload3(index) {
        return this.items3[index];

    }
    getChildPayload4(index) {
        return this.items4[index];
    }
}

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};

export const generateItems = (count, creator) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
};
