import axios, {type AxiosInstance} from "axios";

class ApiClient{
    private readonly axios: AxiosInstance

    constructor(baseURL: string){
        const instance = axios.create({
            baseURL,
          });
        this.axios = instance
    }

    async getUsers(){
        return await this.axios.get<User[]>("/users").then(response=>this.mapUsers(response.data))
    }

    async getPosts():Promise<Post[]>{
        return await this.axios.get<Post[]>("/posts").then(response=>response.data)
    }

    async addPost(post: Omit<Post, "id">):Promise<Post>{
        return await this.axios.post<Post>("/posts", post).then(response=>response.data)
    }

    private mapUsers(users: User[]):AppUsers[]{
        return users.map(user=>({userId: user.id,
            fullName: `${user.name} ${user.username}`,
            email: user.email,
            phone: user.phone,
            company: user.company.name}))
    }
}

const client = new ApiClient("https://jsonplaceholder.typicode.com/")

export {client as ApiClient}

interface User {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
    company: Company
    address: Address
}

interface Company{
    bs: string
    catchPhrase: string
    name: string
}

interface Address {
    city: string
    geo: {lat: string, lng: string}
    street: string
    suite: string
    zipcode: string
}

interface Post{
    id: number
    userId: number
    body: string
    title: string
}


interface AppUsers{
    userId: number,
    fullName: string,
    email: string,
    phone: string,
    company: string
}