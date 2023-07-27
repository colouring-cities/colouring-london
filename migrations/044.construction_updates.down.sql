ALTER TABLE buildings DROP COLUMN IF EXISTS construction_structural_system;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_structural_system_source_type;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_structural_system_source_links;

ALTER TABLE buildings DROP COLUMN IF EXISTS construction_foundation;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_foundation_source_type;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_foundation_source_links;

ALTER TABLE buildings DROP COLUMN IF EXISTS construction_roof_shape;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_roof_shape_source_type;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_roof_shape_source_links;

ALTER TABLE buildings DROP COLUMN IF EXISTS construction_irregularities;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_irregularities_source_type;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_irregularities_source_links;

ALTER TABLE buildings DROP COLUMN IF EXISTS construction_roof_covering_source_type;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_roof_covering_source_links;

ALTER TABLE buildings DROP COLUMN IF EXISTS construction_decorative_features;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_decorative_feature_materials;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_decorative_feature_source_type;
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_decorative_feature_source_links;
