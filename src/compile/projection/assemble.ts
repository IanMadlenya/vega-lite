import {isVgSignalRef, VgProjection} from '../../vega.schema';
import {FacetModel} from '../facet';
import {isUnitModel, Model, ModelWithField} from '../model';
import {UnitModel} from '../unit';

export function assembleProjectionsForModelAndChildren(model: Model): VgProjection[] {
  return model.children.reduce((projections, child) => {
    return projections.concat(child.assembleProjections());
  }, []);
}

export function assembleProjectionForModel(model: ModelWithField): VgProjection[] {
  const component = model.component.projection;
  return component ? [{
    name: component.get('name'),
    fit: component.fit(model),
    size: component.size,
    ...component.explicit
  }] : [];
}
