class Person{
    constructor(name,height){
        this.name=name;
        this.height=height;
    }

    print(){
        console.log(`The name is ${this.name}`);
        console.log(`The height is ${this.height}`);
    }
}

class Student extends Person{

    constructor(name,height,id,cgpa){
        super(name,height)
        this.id=id;
        this.cgpa=cgpa;
    }

    show(){
        this.print();
        console.log(`The id is ${this.id}`);
        console.log(`The cgpa is ${this.cgpa}`);
    }
}

// const p1 = new Person("Hanif",5.6);
// p1.print();

// const s1 = new Student("a",1);
// s1.print();

const st = new Student("Hamim",5.8,1,3.7);
st.show();