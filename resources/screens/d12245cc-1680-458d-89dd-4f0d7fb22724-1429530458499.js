jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_162")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_setup",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zixun_search"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_setup_qudao",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "turn"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_shoudongbangding",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_yijianbangding",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_5",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 210,
                    "left": 1072
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_confirm",
                    "transition": "slidedown"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_90")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_90",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_90": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_90 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_134")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "weixinSetupOpenFlag"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "weixinSetupOpenFlag",
                    "value": "1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_nobond",
                    "transition": "slidedown"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "weixinSetupOpenFlag",
                    "value": "0"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupClose",
                    "transition": "slideup"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_94")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_96")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixin_guanzhuhuifu",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_97")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixin_sucailiebiao",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_98")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixin_zidonghuifu",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixin_guanjianzihuifu",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixin_zidingyicaidan",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_88")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_tuwenXinjian",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_tuwenXinjian",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_sucailiebiaoYuyin",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_sucailiebiaoShipin",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_sucailiebiaoTuwen",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_sucailiebiaoTupian",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_tupianXuanze",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_yuyinXuanze",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_shipinXuanze",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zidonghuifu_wenzi",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zidonghuifu_tupian",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zidonghuifu_yuyin",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zidonghuifu_shipin",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_130")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_130",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_130": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_130 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_144")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_144",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_144": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_144 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_145")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_145",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_145": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_145 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_138")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_138",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_138": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_138 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_153")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_153",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_153": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_153 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_155")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_155",
                    "value": "[已保存]"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_155": {
                      "attributes": {
                        "color": "#67971A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_155 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_117")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5",
                    "transition": "fade"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5",
                    "transition": "fade"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_113")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor1",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor2",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor3",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_116")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_163")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zixun_search"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_167")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor1",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor2",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor3",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_168")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_168")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zixun_search"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_316")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor1",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor2",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor3",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_175")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_zixun_search"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_close",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_155")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_zixun",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_67")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindow_editor1",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_contentWindwo_weixin",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_confirmClose",
                    "transition": "slideup"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_5",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 1802,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_confirmClose",
                    "transition": "slideup"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_5",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 1802,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_yijianbangding2",
                    "transition": "slideleft"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_56")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_shoudongbangding_2",
                    "transition": "slideleft"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_62")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_shoudongbangding_3",
                    "transition": "slideleft"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_84")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_shoudongbangding_4",
                    "transition": "slideleft"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_80")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_126")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_yijianbangding2_1",
                    "transition": "slideleft"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_134")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_230")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_tuwenXinjian",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_231")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_tuwenXinjian",
                    "transition": "pop"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_135")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_238")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_7",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_108")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Input_28",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_66"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Input_30",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_67"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_140")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_141")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_142")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_139")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_weixinSetupOpen_bond"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_none"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_modal",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 899,
                    "left": 0
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_39")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-Image_39",
                      "value": "./images/2d198c4d-ec91-4e7d-a549-9650f33f3b1f.png"
                    }
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_31": {
                        "attributes": {
                          "color": "#000000",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Arial,Arial",
                          "font-size": "11pt",
                          "font-style": "normal",
                          "font-weight": "400",
                          "line-height": "11pt"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_31 .valign": {
                        "attributes": {
                          "vertical-align": "middle"
                        }
                      }
                    } ]
                  }
                ]
              }
            ]
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Image_38")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-Image_38",
                      "value": "./images/9de6fe02-c458-430c-912b-92151d0c2170.png"
                    }
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_32": {
                        "attributes": {
                          "color": "#999999",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Arial,Arial",
                          "font-size": "11pt",
                          "font-style": "normal",
                          "font-weight": "400",
                          "line-height": "11pt"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_32 .valign": {
                        "attributes": {
                          "vertical-align": "middle"
                        }
                      }
                    } ]
                  }
                ]
              }
            ]
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Image_40")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-Image_40",
                      "value": "./images/2d198c4d-ec91-4e7d-a549-9650f33f3b1f.png"
                    }
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_91": {
                        "attributes": {
                          "color": "#000000",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Arial,Arial",
                          "font-size": "11pt",
                          "font-style": "normal",
                          "font-weight": "400",
                          "line-height": "11pt"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_91 .valign": {
                        "attributes": {
                          "vertical-align": "middle"
                        }
                      }
                    } ]
                  }
                ]
              }
            ]
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Image_41")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-Image_41",
                      "value": "./images/2d198c4d-ec91-4e7d-a549-9650f33f3b1f.png"
                    }
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_92": {
                        "attributes": {
                          "color": "#000000",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Arial,Arial",
                          "font-size": "11pt",
                          "font-style": "normal",
                          "font-weight": "400",
                          "line-height": "11pt"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_92 .valign": {
                        "attributes": {
                          "vertical-align": "middle"
                        }
                      }
                    } ]
                  }
                ]
              }
            ]
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Image_43")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-Image_43",
                      "value": "./images/2d198c4d-ec91-4e7d-a549-9650f33f3b1f.png"
                    }
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_93": {
                        "attributes": {
                          "color": "#000000",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Arial,Arial",
                          "font-size": "11pt",
                          "font-style": "normal",
                          "font-weight": "400",
                          "line-height": "11pt"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_93 .valign": {
                        "attributes": {
                          "vertical-align": "middle"
                        }
                      }
                    } ]
                  }
                ]
              }
            ]
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("change", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_90": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_90 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_90",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_90",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_130": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_130 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_130",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_130",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_144": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_144 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_144",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_144",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_145": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_145 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_145",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_145",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_138": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_138 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_138",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_138",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_153": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_153 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_153",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_153",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_155": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_155 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_155",
                    "value": "保存"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_155",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rectangle_106",
                    "value": {
                      "target": "#s-Input_25"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "target": "#s-Radio_button_1"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_66",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_28"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rectangle_16",
                    "value": {
                      "target": "#s-Input_27"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "target": "#s-Radio_button_3"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_67",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_30"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_7",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_8",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_12",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_14",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_15",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_240"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_16") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_16").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_16") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_240"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_13",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    }
  });