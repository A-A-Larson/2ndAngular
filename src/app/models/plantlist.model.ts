export class PlantList {
    
    data: [
        {            
            id: number | null,
            common_name: string | null,
            slug: string | null,
            scientific_name: string | null,
            year: number | null,
            bibliography: string | null,
            author: string | null,
            status: string | null,
            rank: string | null,
            family_common_name: string | null,
            family: string | null,
            genus: string | null,
            genus_id: number | null,
            image_url: string | null,
            links: {
                genus: string | null,
                plant: string | null,
                self: string | null
            },
            plant_id: number | null,
            synonyms: [] | null,
        },        
    ];
    links: {
        first: string,
        last: string,
        next: string,
        self: string
    };
    meta: {
        total: number | null
    };
    

    constructor( 
        data: [
            {
                author: string | null,
                bibliography: string | null,
                common_name: string | null,
                family: string | null,
                family_common_name: string | null,
                genus: string | null,
                genus_id: number | null,
                image_url: string | null,
                id: number | null,
                links: {
                    genus: string | null,
                    plant: string | null,
                    self: string | null
                },
                plant_id: number | null,
                rank: string | null,
                scientific_name: string | null,
                slug: string | null,
                status: string | null,
                synonyms: [] | null,
                year: number | null
            },
        ], 
        links: {
            first: string,
            last: string,
            next: string,
            self: string
        }, 
        meta: {
            total: number | null
        }
    ) {
        this.data = data;
        this.links = links;
        this.meta = meta;
    }

}