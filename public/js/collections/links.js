var app = app || {};

app.Links = Backbone.Collection.extend({
    model: app.Link,
    url: '/api/links'
});