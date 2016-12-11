'use strict';
angular
    .module('xApp')
    .controller('pilatesController', PilatesController);

PilatesController.$inject = ['pilatesfactory', 'ngDialog'];

function PilatesController(pilatesfactory, ngDialog) {
    var vm = this;
    vm.app = 'xApp Pilates';
    vm.init = init;
    vm.cadastrarUser = cadastrarUser;
    vm.saveUser = saveUser;
    vm.calcelDialog = calcelDialog;
    vm.saveActivity = saveActivity;
    vm.cadastrarActivity = cadastrarActivity;
    vm.saveActivity = saveActivity;
    vm.updateStatus = updateStatus;
    vm.removeActivity = removeActivity;


    function init() {
        vm.pilates = pilatesfactory.getPilates();
    }

    function cadastrarUser() {
        ngDialog.openConfirm({
            template: '/view/cadastrarUser.html',
            controller: "pilatesController",
            controllerAs: 'vm',
            className: 'ngdialog-theme-default'
        }).then(function (value) {
            saveUser(value);
        }, function (value) {

        });
    }

    function cadastrarActivity(id) {
        ngDialog.openConfirm({
            template: '/view/cadastrarAtividade.html',
            controller: "pilatesController",
            controllerAs: 'vm',
            className: 'ngdialog-theme-default'
        }).then(function (value) {
            saveActivity(id, value);
        }, function (value) {

        });
    }

    function saveUser(pilates) {
        pilatesfactory.insertPilatesInstructors(pilates);
        ngDialog.closeAll();
    }

    function saveActivity(id, activity) {
        pilatesfactory.insertActivity(id, activity);
        ngDialog.closeAll();
    }

    function removeActivity(idPilates, idActivity) {
        pilatesfactory.removeActivity(idPilates, idActivity);
    }

    function updateStatus(idPilates, idActivity) {
        pilatesfactory.updateStatus(idPilates, idActivity);
    }

    function calcelDialog() {
        ngDialog.closeAll();
    }

}