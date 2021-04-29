export interface ISingleUser
{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        },
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
};

export interface ISingleUserData
{
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: [
        {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        },

        {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        },

        {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        },

        {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        },

        {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        },
        
        {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        }
    ],
    support: {
        url: string,
        text: string
    }
}