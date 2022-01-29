//software architect can also be software engineer in this example
//we will use software architect to lessen the text but note that software engineer can also do this.

//software architect creates the project plans 
interface VehicleImpl{readonly name:string,run():boolean}
interface DriverImpl{drive(vehicle:VehicleImpl):boolean}
interface TruckImpl extends VehicleImpl{loadContainer():boolean;}
interface CarImpl extends VehicleImpl{loadTrunk():boolean;}

//software architect mocks the objects for TDD
let driverMocked:DriverImpl={
    drive(vehicle:VehicleImpl){throw Error("implementation needs to be provided");}
}

let truckMocked:TruckImpl={
    name:"truck",
    run(){throw Error(this.name+" class implementation needs to be provided");},
    loadContainer(){throw Error(this.name+" class implementation needs to be provided");},
}
let carMocked:CarImpl={
    name:"car",
    run(){throw Error(this.name+" class implementation needs to be provided");},
    loadTrunk(){throw Error(this.name+" class implementation needs to be provided");},
}

import { expect } from 'chai';
//this are the test cases, devs will need to import their actual classes here and satisfy the condition
describe('truck test', () => {
    let truck:TruckImpl=truckMocked; //replace truckMocked and import your actual implementation here
    it('check if run works', () => {
        expect(truck.run()).to.be.true;
    });
    it('check if load container works', () => {
        expect(truck.loadContainer()).to.be.true;
    });
});
describe('car test', () => {
    let car:CarImpl=carMocked; //replace carMocked and import your actual implementation here
    it('check if run works', () => {
        expect(car.run()).to.be.true;
    });
    it('check if loadTrunk works', () => {
        expect(car.loadTrunk()).to.be.true;
    });
});
describe('drive test', () => {
    let driver:DriverImpl=driverMocked//replace driverMocked and import your actual implementation here
    it('check if driving car works', () => {
        expect(driver.drive(carMocked)).to.be.true;
    });
    it('check if driving truck works', () => {
        expect(driver.drive(truckMocked)).to.be.true;
    });
});

//note the above is an example of TDD, 
//the the actual classes are assigned per dev for the actual implementation
//devs are constrained to follow the requirement as defined by interface and the test cases
//this way even if the software architect is not available it won't matter, the team can proceed without stepping at each others toes.



//the software architect then proceeds at assembling the actual functionality of the project
//while waiting for the actual implementations from his devs to complete.
//he uses mocked objects to temporary fill up the missing parts so he can concentrate on the high level functionality of the project





//below are entry points, it can be from an endpoint, an event, a cron job, perhaps a scheduler, webhook etc.
//this can also be a part of a bigger process, like a cargoService or something similar, if it is then it will be part of CargoService class
function bringCargoViaCar(driver:DriverImpl,car:CarImpl){driver.drive(car);}
function bringCargoViaTruck(driver:DriverImpl,truck:TruckImpl){driver.drive(truck);}

//note : business tier architecture is ignored to simplify the above examples

















