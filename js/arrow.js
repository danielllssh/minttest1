let arrow1 = false;
const arrowClick1 = () => {
    arrow1 = !arrow1;
    if(arrow1) {
        $('details:nth-child(2) i:nth-child(2)').attr({'class': 'fas fa-angle-up'});
    }
    else {
        $('details:nth-child(2) i:nth-child(2)').attr({'class': 'fas fa-angle-down'});
    }
}
let arrow2 = false;
const arrowClick2 = () => {
    arrow2 = !arrow2;
    if(arrow2) {
        $('details:nth-child(3) i:nth-child(2)').attr({'class': 'fas fa-angle-up'});
    }
    else {
        $('details:nth-child(3) i:nth-child(2)').attr({'class': 'fas fa-angle-down'});
    }
}

let arrow3 = false;
const arrowClick3 = () => {
    arrow3 = !arrow3;
    if(arrow3) {
        $('details:nth-child(4) i:nth-child(2)').attr({'class': 'fas fa-angle-up'});
    }
    else {
        $('details:nth-child(4) i:nth-child(2)').attr({'class': 'fas fa-angle-down'});
    }
}

let arrow4 = false;
const arrowClick4 = () => {
    arrow4 = !arrow4;
    if(arrow4) {
        $('details:nth-child(5) i:nth-child(2)').attr({'class': 'fas fa-angle-up'});
    }
    else {
        $('details:nth-child(5) i:nth-child(2)').attr({'class': 'fas fa-angle-down'});
    }
}