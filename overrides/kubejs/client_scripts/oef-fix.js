// kubejs/client_scripts/recipe_viewer_unification.js
// Fluid removal doesnt work atm :<

const REMOVED_BUCKETS = [
    'tfmg:hydrogen_bucket',
    'tfmg:molten_slag_bucket',
    'createbigcannons:molten_steel_bucket'
];

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    REMOVED_BUCKETS.forEach(bucket => {
        event.remove(bucket);
    });
});