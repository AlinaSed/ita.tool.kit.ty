'use srtict';
let mediator = require('../Mediator.js'),
    tpl = require('../view/tpl/tplModalSettings.js');

class ContextMenuGroupView {
    constructor(group) {
        this.body = document.body;
        this.group = group;
    }

    get selectors() {
        return {
            modal: '.context-menu-group-modal',
            closeButton: '.close-group-context-menu',
            modalBackdrop: '.modal-backdrop',
            deleteGroupBtn: '.delete-group-btn',
            editGroupBtn: '.edit-group-btn'
        };
    }

    show() {
        this.addLayover();
        this.body.insertAdjacentHTML('beforeEnd', tpl.groupContextMenu);
        this.activate();
    }

    hide() {
        this.diactivate();
        document.querySelector(this.selectors.modalBackdrop).remove();
        document.querySelector(this.selectors.modal).remove();
    }


    activate() {
        $(this.selectors.deleteGroupBtn).bind("click", this.deleteGroupHandler.bind(this));
        $(this.selectors.closeButton).bind("click", this.hide.bind(this));
        $(this.selectors.editGroupBtn).bind("click", this.editGroupHandler.bind(this));
    }

    diactivate() {
        $(this.selectors.closeButton).unbind("click");
    }

    addLayover() {
        let modalBackdrop = `<div id="div" class="modal-backdrop fade in"></div>`;
        this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
    }

    deleteGroupHandler(event) {
        mediator.pub('deleteGroup', this.group);
        this.hide();
    }

    editGroupHandler() {
        mediator.pub('showEditGroup', this.group);
        this.hide();
    }
}

module.exports = ContextMenuGroupView;