export class Post {

    age: string;
    brand: string;
    color: string;
    desc: string;
    displacement: number;
    email: string;
    fuel: string;
    image: string[];
    km: string;
    model: string;
    name: string;
    phone: string;
    price: number;
    province: string;
    type: string;
    userId: string;
    id: number;


    constructor(posts: any) {
        this.age = posts.age;
        this.brand = posts.brand;
        this.color = posts.color;
        this.desc = posts.desc;
        this.displacement = posts.displacement;
        this.email = posts.email;
        this.fuel = posts.fuel;
        this.image = posts.image;
        this.km = posts.km;
        this.model = posts.model;
        this.name = posts.name;
        this.phone = posts.phone;
        this.price = posts.price;
        this.province = posts.province;
        this.type = posts.type;
        this.userId = posts.userId;
        this.id = posts.id;

    }


}