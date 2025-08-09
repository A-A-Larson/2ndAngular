export interface Plant {    
                    
    id: number;
    common_name?: string | null;
    slug: string;
    scientific_name: string;
    year?: number | null;
    bibliography?: string | null;
    author?: string | null;
    status: string;
    rank: string;
    family_common_name?: string | null;
    family: string;
    genus_id: number;
    genus: string;
    image_url?: string | null;
    links: {
        self: string,
        genus: string,
        plant: string
    };    
    synonyms?: string[] | null;
}

export interface PlantLinks {
    self: string;
    first?: string;
    next?: string;
    prev?: string;
    last?: string;
}

export interface PlantMeta {
    total: number;
};

export interface PlantList {
    data: Plant[];
    links: PlantLinks;
    meta: PlantMeta;
}