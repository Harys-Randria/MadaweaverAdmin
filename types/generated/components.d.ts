import type { Schema, Struct } from '@strapi/strapi';

export interface TextItinerary extends Struct.ComponentSchema {
  collectionName: 'components_text_itineraries';
  info: {
    displayName: 'itinerary';
    icon: 'car';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TextLocation extends Struct.ComponentSchema {
  collectionName: 'components_text_locations';
  info: {
    displayName: 'location';
    icon: 'house';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.itinerary': TextItinerary;
      'text.location': TextLocation;
    }
  }
}
