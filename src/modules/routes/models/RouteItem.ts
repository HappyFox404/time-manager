export interface RouteItem {
    element: JSX.Element;
    path: string;
    condition?: RouteItemCondition;
};

export interface RouteItemCondition {
    condition: () => boolean;
    element: JSX.Element;
}