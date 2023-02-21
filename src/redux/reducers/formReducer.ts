import { TooltipList } from "../../enums/Tooltip";
import { ActionType } from "../actionsList";
import { FormAction, FormState } from "../types";

const initialState: FormState = {
    data: [{
        title: 'Basic info',
        items: [{
            columnsCount: 2,
            name: 'basic',
            fields: [{
                label: {
                    text: 'What’s your name?',
                    tooltip: {
                        type: TooltipList.Attention,
                        text: 'Mandatory question'
                    }
                },
                name: 'name',
                required: true,
                value: ''
            }, {
                label: {
                    text: 'What’s your e-mail?',
                    tooltip: {
                        type: TooltipList.Attention,
                        text: 'Mandatory question'
                    }
                },
                name: 'email',
                required: true,
                value: ''
            }, {
                label: {
                    text: 'What’s your product name?',
                    tooltip: {
                        type: TooltipList.Attention,
                        text: 'Mandatory question'
                    }
                },
                name: 'product-name',
                required: true,
                span: 2,
                value: ''
            }, {
                label: {
                    text: 'Describe your project in a few words',
                },
                type: 'textarea',
                span: 2,
                name: 'project-description',
                value: ''
            }]
        }, {
            legend: 'How can we help you?',
            fields: [{
                type: 'checkbox',
                items: [{
                    text: 'Evaluate project feasibility'
                }, {
                    text: 'Improve/complete existing prototype'
                }, {
                    text: 'Only electrical engineering services'
                }, {
                    text: 'Design, create and test prototypes'
                }, {
                    text: 'Develop manufacturing-ready product'
                }]
            }]
        }, {
            legend: 'What is the product category?',
            columnsCount: 2,
            fields: [{
                type: 'checkbox',
                name: 'product-category',
                cols: [{
                    items: [{
                        text: 'Iot devices'
                    }, {
                        text: 'AR/VR'
                    }, {
                        text: 'Other consumer electronics'
                    }, {
                        text: 'Electric vehicles (ev)'
                    }, {
                        text: 'Military'
                    }]
                }, {
                    items: [{
                        text: 'Wearables'
                    }, {
                        text: 'Medical/biomedicine'
                    }, {
                        text: 'Industrial equipment'
                    }, {
                        text: 'Robotics, drones'
                    }, {
                        text: 'Smart home'
                    }]
                }]
            }]
        }, {
            legend: 'What is the product type?',
            columnsCount: 2,
            fields: [{
                type: 'checkbox',
                name: 'product-type',
                items: [{
                    text: 'B2C',
                    tooltip: {
                        type: TooltipList.Question,
                        text: 'Product is used by other consumers'
                    }
                }, {
                    text: 'B2B',
                    tooltip: {
                        type: TooltipList.Question,
                        text: 'Product is used by other businesses'
                    }
                }]
            }]
        }, {
            legend: 'Who is your ideal client? Who is that person? What is important for them?',
            fields: [{
                name: 'ideal-client',
                type: 'textarea',
                value: ''
            }]
        }, {
            legend: 'What client pains does your product solve?',
            fields: [{
                name: 'product-solution',
                type: 'textarea',
                value: ''
            }]
        }, {
            legend: 'Are there similar products on the market?',
            fields: [{
                name: 'similar-products',
                type: 'textarea',
                value: ''
            }]
        }]
    }],
    currentStep: 1,
};

const formReducer = (state = initialState, action: FormAction): FormState => {
    switch (action.type) {
        case ActionType.SetInputValue:
            const currentStep = state.data.filter((_, index) => index === action.payload.step);
            console.log(currentStep);
            
            return {
                ...state,

            };
        case ActionType.NextStep:
            return {
                ...state,
                currentStep: state.currentStep + 1
            };
        case ActionType.PrevStep:
            return {
                ...state,
                currentStep: state.currentStep - 1
            };
        default:
            return state;
    }
}

export default formReducer;