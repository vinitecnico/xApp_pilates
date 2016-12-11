'use strict';

angular
    .module('xApp')
    .factory('pilatesfactory', Pilatesfactory);

Pilatesfactory.$inject = ['pilatesService'];

function Pilatesfactory(pilatesService) {
    var service = {
        getPilates: getPilates,
        insertPilatesInstructors: insertPilatesInstructors,
        insertActivity: insertActivity,
        updateStatus: updateStatus,
        removeActivity: removeActivity
    };

    return service;

    
    function getPilates() {
        return pilatesService.getPilatesInstructors();
    }

    function insertPilatesInstructors(pilates) {
        pilatesService.insertPilatesInstructors(pilates);
    }

    function insertActivity(id, activity) {
        pilatesService.insertActivity(id, activity);
    }

    function updateStatus(idPilates, idActivity) {
        pilatesService.updateStatus(idPilates, idActivity);
    }

    function removeActivity(idPilates, idActivity) {
        pilatesService.removeActivity(idPilates, idActivity);
    }
}