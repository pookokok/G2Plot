import * as _ from '@antv/util';
import BasePlot, { PlotCfg } from '../../base/plot-refactor';
import StackBarLayer, { StackBarLayerConfig } from './layer-refactor';

export interface StackBarConfig extends StackBarLayerConfig, PlotCfg {}


export default class StackBar<T extends StackBarConfig = StackBarConfig> extends BasePlot<T> {
  public static getDefaultProps = StackBarLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = _.deepMix({}, props);
    layerProps.type = 'stackBar';
    super.createLayers(layerProps);
  }
}