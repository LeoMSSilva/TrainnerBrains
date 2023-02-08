import { IStackRoutesList } from '../routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IStackRoutesList {}
  }
}
