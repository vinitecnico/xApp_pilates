'use strict';

angular
    .module('xApp')
    .service('pilatesService', PilatesService);

PilatesService.$inject = ['$filter'];

function PilatesService($filter) {
    this.getPilatesInstructors = getPilatesInstructors;
    this.insertPilatesInstructors = insertPilatesInstructors;
    this.insertActivity = insertActivity;
    this.updateStatus = updateStatus;
    this.removeActivity = removeActivity;

    var date = new Date();
    var pilatesInstructors = [{
        id: 1,
        fistName: 'vinicius',
        lastName: 'Santos',
        email: 'vrds.vinicius@hotmail.com',
        isPremium: true,
        perfilImage: "image/img.jpg",
        createDate: date.setDate(date.getDate() - 1),
        activities: [{
            id: 1,
            createDate: new Date(),
            name: 'atividade 1',
            status: 'concluido'
        }, {
            id: 2,
            createDate: new Date(),
            name: 'atividade 2',
            status: 'Pendente'
        }]
    }, {
        id: 2,
        fistName: 'Maria',
        lastName: 'Test',
        email: 'maria@hotmail.com',
        isPremium: false,
        perfilImage: null,
        createDate: date.setDate(date.getDate() - 2),
        activities: []
    }, {
        id: 3,
        fistName: 'Jose',
        lastName: 'Cristovam',
        email: 'cristovam@hotmail.com',
        isPremium: true,
        perfilImage: "image/img.jpg",
        createDate: date.setDate(date.getDate() - 3),
        activities: []
    }];


    function getPilatesInstructors() {
        return pilatesInstructors;
    }

    function insertPilatesInstructors(pilates) {
        pilates.id = pilatesInstructors.length + 1;
        pilates.createDate = new Date();
        pilates.activities = [];
        pilatesInstructors.push(pilates);
    }

    function insertActivity(id, activity) {
        var pilates = $filter('filter')(pilatesInstructors, {
            id: id
        })[0];
        activity.id = pilates.activities.length + 1;
        activity.createDate = new Date();
        activity.status = 'Pendente';
        pilates.activities.push(activity);
    }

    function updateStatus(idPilates, idActivity) {
        var pilates = $filter('filter')(pilatesInstructors, {
            id: idPilates
        })[0];
        var activity = $filter('filter')(pilates.activities, {
            id: idActivity
        })[0];
        activity.status = 'concluido';
    }

    function removeActivity(idPilates, idActivity) {
        var pilates = $filter('filter')(pilatesInstructors, {
            id: idPilates
        })[0];
        for (var i = pilates.activities.length - 1; i >= 0; i--) {
            if (pilates.activities[i].id == idActivity) {
                pilates.activities.splice(i, 1);
            }
        }
    }
}