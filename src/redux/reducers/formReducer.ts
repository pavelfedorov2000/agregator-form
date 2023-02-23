import { FieldType } from "../../enums/FieldType";
import { StepName } from "../../enums/StepName";
import { TooltipList } from "../../enums/Tooltip";
import { Checkbox } from "../../interfaces/Checkbox";
import { ActionType } from "../actionsList";
import { FormAction, FormState } from "../types";

const initialState: FormState = {
    data: [{
        title: StepName.Basic,
        items: [{
            name: 'basic-fields',
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
                value: '',
                inResult: true,
            }]
        }, {
            legend: {
                text: 'How can we help you?'
            },
            name: 'help',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
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
            legend: {
                text: 'What is the product category?'
            },
            name: 'product-category',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
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
            legend: {
                text: 'What is the product type?'
            },
            name: 'product-type',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
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
            legend: {
                text: 'Who is your ideal client? Who is that person? What is important for them?'
            },
            fields: [{
                name: 'ideal-client',
                type: 'textarea',
                value: ''
            }]
        }, {
            legend: {
                text: 'What client pains does your product solve?'
            },
            fields: [{
                name: 'product-solution',
                type: 'textarea',
                value: ''
            }]
        }, {
            legend: {
                text: 'Are there similar products on the market?'
            },
            fields: [{
                name: 'similar-products',
                type: 'textarea',
                value: ''
            }]
        }]
    }, {
        title: StepName.TimeCost,
        items: [{
            legend: {
                text: 'Your ideal timeframe for a prototype'
            },
            name: 'prototype-timeframe',
            fieldsClass: 'step-item__line-radios',
            inResult: true,
            fields: [{
                type: FieldType.Radio,
                style: 'range',
                items: [{
                    text: 'To Be Discussed'
                }, {
                    text: '3 months'
                }, {
                    text: '6 months'
                }, {
                    text: '1 year'
                }]
            }]
        }, {
            legend: {
                text: 'How many prototypes do you need?'
            },
            inResult: true,
            fields: [{
                name: 'prototypes-number',
                value: '',
                descr: 'pcs'
            }]
        }, {
            legend: {
                text: 'What are the most important features of the prototype?'
            },
            inResult: true,
            fields: [{
                name: 'prototype-features',
                type: 'textarea',
                value: ''
            }]
        }, {
            legend: {
                text: 'Target market'
            },
            name: 'target-market',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'North America'
                    }, {
                        text: 'South America'
                    }, {
                        text: 'Europe'
                    }]
                }, {
                    items: [{
                        text: 'Australia'
                    }, {
                        text: 'Asia'
                    }, {
                        text: 'Worldwide'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Your ideal timeframe for production'
            },
            name: 'production-timeframe',
            fieldsClass: 'step-item__line-radios',
            inResult: true,
            fields: [{
                type: FieldType.Radio,
                style: 'range',
                items: [{
                    text: 'To Be Discussed'
                }, {
                    text: '6-8 months'
                }, {
                    text: '10-12 months'
                }, {
                    text: '12-18 months'
                }, {
                    text: 'Till completion'
                }]
            }]
        }, {
            fields: [{
                label: {
                    text: 'Target retail sale price',
                    tooltip: {
                        type: TooltipList.Question,
                        text: 'How much consumers will pay for it'
                    }
                },
                name: 'target-retail',
                descr: 'USD per unit',
                value: '',
                inResult: true,
            }]
        }, {
            fields: [{
                label: {
                    text: 'Target cost to make (per unit)',
                    tooltip: {
                        type: TooltipList.Question,
                        text: 'Cost of materials and labor to produce 1 unit'
                    }
                },
                name: 'target-cost',
                descr: 'USD per unit',
                value: ''
            }]
        }, {
            legend: {
                text: 'Target annual production volume'
            },
            name: 'production-volume',
            fieldsClass: 'step-item__line-radios',
            fields: [{
                type: FieldType.Radio,
                style: 'range',
                items: [{
                    text: '<100'
                }, {
                    text: '6-8 months'
                }, {
                    text: '10-12 months'
                }, {
                    text: '12-18 months'
                }, {
                    text: 'Till completion'
                }]
            }]
        }]
    }, {
        title: StepName.Electronics,
        items: [{
            legend: {
                text: 'Power source'
            },
            name: 'power-source',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                items: [{
                    text: 'Monochrome LCD Display'
                }, {
                    text: 'External DC Power',
                    tooltip: {
                        type: TooltipList.Question,
                        text: '(e.g. 12 VDC like your laptop is powered with external power adapter)'
                    }
                }, {
                    text: 'Other (type your answer)'
                }, {
                    text: 'External AC Power',
                    tooltip: {
                        type: TooltipList.Question,
                        text: 'e.g. 110VAC in US or 220 VAC in Europe'
                    }
                }]
            }]
        }, {
            legend: {
                text: 'How users interact with the device?'
            },
            name: 'users-interaction',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                items: [{
                    text: 'Standalone unit'
                }, {
                    text: 'Use mobile phone to control'
                }, {
                    text: 'Other (type your answer)',
                }]
            }]
        }, {
            legend: {
                text: 'Interfaces'
            },
            name: 'interfaces',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Wireless'
                    }, {
                        text: 'USB',
                        items: [{
                            text: 'Wi-Fi'
                        }, {
                            text: 'BLE'
                        }, {
                            text: 'Cellular 3G/4G/5G'
                        }, {
                            text: 'Other'
                        }]
                    }]
                }, {
                    items: [{
                        text: 'Video output'
                    }, {
                        text: 'Audio jack'
                    }, {
                        text: 'Ethernet'
                    }]
                }, {
                    items: [{
                        text: 'Other (type your answer)'
                    }]    
                }]
            }]
        }, {
            legend: {
                text: 'Sensors'
            },
            name: 'sensors',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Accelerometer'
                    }, {
                        text: 'Gyroscope'
                    }, {
                        text: 'Biometric'
                    }, {
                        text: 'Movement detection'
                    }]
                }, {
                    items: [{
                        text: 'Camera'
                    }, {
                        text: 'Microphone'
                    }, {
                        text: 'Temperature / Humidity'
                    }, {
                        text: 'Illumination'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Visual indication'
            },
            name: 'visual-indication',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Simple indication',
                        tooltip: {
                            type: TooltipList.Question,
                            text: 'Power LED, Status LED'
                        }
                    }, {
                        text: 'Monochrome LCD Display'
                    }]
                }, {
                    items: [{
                        text: 'Color LCD display'
                    }, {
                        text: 'No display'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Do you want to update device software remotely?'
            },
            name: 'update-soft',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                items: [{
                    text: 'Yes, Over the Air updates',
                    small: '(recommended)'
                }, {
                    text: 'Yes, Update via USB',
                }, {
                    text: 'No software updates',
                }]
            }]
        }, {
            legend: {
                text: 'Any other electronic features you want to add?'
            },
            fields: [{
                name: 'electronic-features',
                type: 'textarea',
                value: ''
            }]
        }]
    }, {
        title: StepName.UnitAppearance,
        items: [{
            legend: {
                text: 'Material of the enclosure'
            },
            name: 'enclosure-material',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Plastic'
                    }, {
                        text: 'Composite'
                    }, {
                        text: 'Need help selecting'
                    }]
                }, {
                    items: [{
                        text: 'Metal'
                    }, {
                        text: 'Wood'
                    }, {
                        text: 'No enclosure'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Must-have features in appearance'
            },
            fields: [{
                name: 'must-features',
                type: 'textarea',
                value: ''
            }]
        }, {
            legend: {
                text: 'Unit dimensions'
            },
            fieldsClass: 'step-item__inputs input-field',
            columnsCount: 2,
            fields: [{
                className: 'input-field',
                name: 'unit-dimensions-length',
                title: 'Length',
                descr: 'inch',
                size: 'small',
                value: ''
            }, {
                className: 'input-field',
                name: 'unit-dimensions-width',
                title: 'Width',
                descr: 'inch',
                size: 'small',
                value: ''
                }, {
                className: 'input-field',
                name: 'unit-dimensions-height',
                title: 'Height',
                descr: 'inch',
                size: 'small',
                value: ''
            }]
        }, {
            legend: {
                text: 'Select what is the object with the closest size'
            },
            name: 'size',
            fieldsClass: 'radio-fields',
            fields: [{
                type: FieldType.Radio,
                cols: [{
                    items: [{
                        text: 'Key'
                    }, {
                        text: 'Matchbox'
                    }, {
                        text: 'Wristband'
                    }, {
                        text: 'Backpack'
                    }, {
                        text: 'Table'
                    }, {
                        text: 'Truck'
                    }]
                }, {
                    items: [{
                        text: 'Cigarette pack'
                    }, {
                        text: 'Cellphone'
                    }, {
                        text: 'Laptop'
                    }, {
                        text: 'Chair'
                    }, {
                        text: 'Car'
                    }, {
                        text: 'House'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Preferred color solution'
            },
            name: 'color-solution',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Calm'
                    }, {
                        text: 'Contrast'
                    }, {
                        text: 'Dynamic'
                    }]
                }, {
                    items: [{
                        text: 'With superimposed drawings'
                    }, {
                        text: 'Bright'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'What are your preferred colors?'
            },
            name: 'preferred-colors',
            fieldsClass: 'colors',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                name: 'color',
                style: 'color',
                items: [{
                    bg: '#000'
                }, {
                    bg: '#808080'
                }, {
                    bg: '#C0C0C0',
                    light: true
                }, {
                    bg: '#FFF',
                    light: true
                }, {
                    bg: '#FF00FF'
                }, {
                    bg: '#800080'
                }, {
                    bg: '#800000'
                }, {
                    bg: '#FF0000'
                }, {
                    bg: '#FFFF00',
                    light: true
                }, {
                    bg: '#808000'
                }, {
                    bg: '#00FF00',
                    light: true
                }, {
                    bg: '#008000'
                }, {
                    bg: '#00FFFF',
                    light: true
                }, {
                    bg: '#008080'
                }, {
                    bg: '#0000FF'
                }, {
                    bg: '#000080'
                }]
            }]
        }, {
            legend: {
                text: 'Surface finishing'
            },
            name: 'surface-finishing',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Gloss'
                    }, {
                        text: 'Soft-touch'
                    }, {
                        text: 'Matt'
                    }]
                }, {
                    items: [{
                        text: 'Non-slip'
                    }, {
                        text: 'Need help selecting'
                    }]
                }]
            }]
        }],
    }, {
        title: StepName.Operating,
        items: [{
            legend: {
                text: 'Where the product is used',
                small: '(select all that apply)'
            },
            name: 'product-usage',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Indoors'
                    }, {
                        text: 'Outdoors in Cold Climate (e.g. Canada)'
                    }, {
                        text: 'Industrial facilities'
                    }, {
                        text: 'Underwater'
                    }]
                }, {
                    items: [{
                        text: 'Outdoors in Warm Climate (e.g. San Francisco)'
                    }, {
                        text: 'Outdoors in Hot Climate (e.g. Arizona)'
                    }, {
                        text: 'Harsh operating conditions (e.g. Battlefield)'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Any of the following may affect the unit'
            },
            name: 'unit-affect',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Water'
                    }, {
                        text: 'Mechanical impact'
                    }, {
                        text: 'Vibration'
                    }, {
                        text: 'High EMI (e.g. cellular tower)'
                    }]
                }, {
                    items: [{
                        text: 'Thermal cycling (hot cold hot)'
                    }, {
                        text: 'Radioactive'
                    }, {
                        text: 'Saltwater'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Ambient temperature range'
            },
            name: 'temperature-range',
            fields: [{
                type: FieldType.Checkbox,
                items: [{
                    text: 'Most common for consumer electronics: 0 … 70 °C'
                }, {
                    text: 'Extended range for industrial electronics: -40 … 85 °C'
                }]
            }]
        }, {
            legend: {
                text: 'Enclosure protection (IP rating) (e.g. IP55)',
                tooltip: {
                    type: TooltipList.Question,
                    href: 'https://www.enclosurecompany.com/ip-ratings-explained.php',
                    text: 'https://www.enclosurecompany.com/ip-ratings-explained.php'
                }
            },
            name: 'enclosure-protection',
            fields: [{
                type: FieldType.Checkbox,
                items: [{
                    text: 'Target IP rating: IP'
                }, {
                    text: 'To Be Discussed'
                }]
            }]
        }, {
            legend: {
                text: 'Any mechanical features that should be added?'
            },
            fields: [{
                name: 'mechanical-features',
                type: FieldType.Textarea,
                value: ''
            }]
        }]
    }, {
        title: StepName.Software,
        items: [{
            legend: {
                text: 'Do you need a mobile app?',
                small: '(select all that apply)'
            },
            name: 'need-app',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'iPhone'
                    }, {
                        text: 'No app'
                    }]
                }, {
                    items: [{
                        text: 'Android'
                    }, {
                        text: 'Web interface'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Who develops the apps?',
            },
            name: 'app-developer',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'AJProTech'
                    }, {
                        text: '3rd party'
                    }]
                }, {
                    items: [{
                        text: 'Your internal team'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Briefly describe app functionality in few sentences'
            },
            fields: [{
                name: 'app-functionality',
                type: FieldType.Textarea,
                value: '',
            }]
        }]
    }, {
        title: StepName.Summary,
        subtitle: 'Well done, You are a superstar! Let’s check your contact information',
        items: [{
            legend: {
                text: 'What’s your role in the process?'
            },
            name: 'process-role',
            inResult: true,
            fields: [{
                type: FieldType.Checkbox,
                cols: [{
                    items: [{
                        text: 'Individual'
                    }, {
                        text: 'Investor'
                    }]
                }, {
                    items: [{
                        text: 'Company representative'
                    }]
                }]
            }]
        }, {
            legend: {
                text: 'Your contacts'
            },
            name: 'contacts',
            columnsCount: 2,
            fieldsClass: 'contacts__fields',
            fields: [{
                label: {
                    text: 'First and last name',
                    tooltip: {
                        type: TooltipList.Attention,
                        text: 'Mandatory question'
                    }
                },
                name: 'name',
                required: true,
                value: '',
                inResult: true,
            }, {
                label: {
                    text: 'E-mail',
                    tooltip: {
                        type: TooltipList.Attention,
                        text: 'Mandatory question'
                    }
                },
                type: 'email',
                name: 'email',
                required: true,
                value: '',
                inResult: true,
            }, {
                label: {
                    text: 'Phone number',
                    tooltip: {
                        type: TooltipList.Attention,
                        text: 'Mandatory question'
                    }
                },
                type: 'tel',
                name: 'product-name',
                required: true,
                value: '',
                inResult: true,
            }]
        }, {
            legend: {
                text: 'Any questions or comments?'
            },
            fields: [{
                type: FieldType.Textarea,
                name: 'questions',
                value: ''
            }]
        }]
    }],
    currentStep: 1,
};

const formReducer = (state = initialState, action: FormAction): FormState => {
    switch (action.type) {
        case ActionType.SetInputValue:
            return {
                ...state,
                data: state.data.map((step, index) => {
                    if (index === action.payload.step - 1) {
                        return {
                            ...step,
                            items: step.items?.map((item) => {
                                if (item.name === action.payload.fieldsName) {
                                    return {
                                        ...item,
                                        fields: item.fields.map((field) => {
                                            if (field.name === action.payload.name) {
                                                return {
                                                    ...field,
                                                    value: action.payload.value
                                                }
                                            }

                                            return field;
                                        })
                                    }
                                }

                                return item;
                            })
                        }
                    }

                    return step;
                })
            };
        case ActionType.SetCheckboxValue:
            return {
                ...state,
                data: state.data.map((step, index) => {
                    if (index === action.payload.step - 1) {
                        return {
                            ...step,
                            items: step.items?.map((item) => {
                                if (item.name === action.payload.name) {
                                    return {
                                        ...item,
                                        values: item.fields.map((field) => {
                                            let includes, newValues;
                                            if (field.cols?.length) {
                                                const items = field.cols?.map((col) => {
                                                    return [...col.items as any[]]
                                                })
                                                includes = item.values && item.values.map((item: any) => item.text).includes(action.payload.value);
                                                newValues = items.filter((item: any) => item.find((element: any) => element.text === action.payload.value))[0].filter((item: any) => item.text === action.payload.value);
                                            } else {
                                                includes = item.values && item.values[0].map((item: any) => item.text).includes(action.payload.value);
                                                newValues = field.items?.filter((elem) => elem.text === action.payload.value);
                                            }

                                            return item.values ?
                                                includes ? item.values[0].filter((item: any) => item.text !== action.payload.value)
                                                    : [
                                                        ...item.values[0],
                                                        ...newValues as any[]
                                                    ]
                                                : newValues
                                        })
                                    }
                                }

                                return item;
                            })
                        }
                    }

                    return step;
                })
            }
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
        case ActionType.GoToStep:
            return {
                ...state,
                currentStep: action.payload
            };
        default:
            return state;
    }
}

export default formReducer;