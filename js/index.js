/*外部引入  确认打开次数*/

// $.ajax({
//     type: "GET",
//     dataType: "text",
//     url: "http://www.bticest.com:8080/H5Service.asmx/H5?CourseId=1095&CourseTitle=基于SharePoint 实现文件发布与审批流程",
// });


function index1() {
    $("#part1_1").animate({
        left: ".26rem"
    }, 1000, function() {
        $("#part1_2_1").animate({
            width: "1.57rem"
        }, 800);
        $("#part1_2_2").animate({
            width: "4.12rem"
        }, 800, function() {
            $("#part1_3").animate({
                left: "1.14rem"
            }, 1200);
            $("#part1_4").animate({
                left: "1.14rem"
            }, 1200);
        });
    })

    $("#part1_5_2").animate({
        left: "1.47rem"
    }, 1200, function() {
        $("#part1_5_1").animate({
            width: "1.04rem"
        }, 1000);
        $("#part1_5_3").animate({
            width: "1.37rem"
        }, 1000);
    });
}

function index2() {
    $("#part2_1").animate({
        width: "1.6rem"
    }, 1000, function() {
        $("#part2_2_1").animate({
            left: ".81rem"
        }, 800, function() {
            $("#part2_2_2").animate({
                left: ".81rem"
            }, 800, function() {
                $("#part2_2_3").animate({
                    left: ".81rem"
                }, 800);
            });
        });
    });

    $("#part2_3_1").animate({
        width: "5.99rem"
    }, 1800, function() {
        $("#part2_3_2").animate({
            left: "0.6rem"
        }, 900, function() {
            $("#part2_3_3").animate({
                left: ".7rem"
            }, 900, function() {
                $("#part2_4_1").animate({
                    width: "2.06rem"
                }, 1200);
                $("#part2_4_2").animate({
                    width: "3.98rem"
                }, 1200);
            });
        });
    });

}

function index3() {
    $("#part3").animate({
        left: ".26rem"
    }, 1200);
    $("#part3_1").animate({
        width: "2.98rem"
    }, 1600, function() {
        $("#part3_3").animate({
            left: "1.68rem"
        }, 800, function() {
            $("#part3_2").animate({
                left: ".27rem"
            }, 1300, );
            $("#part3_4").animate({
                left: "2.03rem"
            }, 1300, function() {
                $("#part3_5").animate({
                    left: "0.26rem"
                }, 1000)
            });
        });
    });





}

function index4() {
    $("#part4").animate({
        left: ".26rem"
    }, 1400)
    $("#part4_1").animate({
        width: "3.2rem"
    }, 800);
    $("#part4_2_1").animate({
        left: ".9rem"
    }, 1000);
    $("#part4_2_2").animate({
        left: "4.55rem"
    }, 1000);
    $("#part4_2_3").animate({
        left: "2.5rem"
    }, 800);
    $("#part4_3").animate({
        width: "3.2rem"
    }, 1000);

    $("#part4_4").animate({
        left: "0.26rem"
    }, 1400, function() {
        $("#part4_4_1").animate({
            right: "0.26rem"
        }, 800)
    });

    $("#part4_6").animate({
        left: "0.26rem"
    }, 1600, function() {
        $("#part4_6_1").animate({
            right: "0.26rem"
        }, 800)
    });
    $("#part4_5").animate({
        left: "0.26rem"
    }, 1800, function() {
        $("#part4_5_1").animate({
            right: "0.26rem"
        }, 800)
    });

}



$(function() {
    $('#dowebok').fullpage({
        continuousVertical: true,
        css3: true,
        fitToSection: false,
        // paddingBottom: ".5rem",
        paddingTop: ".3rem",
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],

        afterRender: function() {
            index1();
        },
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                index1();
            };
            if (index == 2) {
                index2();
            };
            if (index == 3) {
                index3();
            };
            if (index == 4) {
                index4();
            };


            if (index != 1) {
                $("#part1_1").css({
                    left: "7rem"
                });
                $("#part1_2_1,#part1_2_2,#part1_2_3").css({
                    width: "0rem"
                });
                $("#part1_3").css({
                    left: "-5rem"
                });
                $("#part1_4").css({
                    left: "8rem"
                });

                $("#part1_5_1").css({
                    width: "0rem"
                });
                $("#part1_5_2").css({
                    left: "-4rem"
                });
                $("#part1_5_3").css({
                    width: "0rem"
                });
            };
            if (index != 2) {
                $("#part2_1").css({
                    width: "0rem"
                });
                $("#part2_2_1,#part2_2_2,#part2_2_3").css({
                    left: "7rem"
                });

                $("#part2_3_1").css({
                    width: "0rem"
                });
                $("#part2_3_2").css({
                    left: "-5.5rem"
                });
                $("#part2_3_3").css({
                    left: "6rem"
                });
                $("#part2_4_1,#part2_4_2").css({
                    width: "0rem"
                });

            };
            if (index != 3) {
                $("#part3").css({
                    left: "7rem"
                })
                $("#part3_1").css({
                    width: "0rem"
                });
                $("#part3_2").css({
                    left: "-2rem"
                });
                $("#part3_3").css({
                    left: "-1rem"
                });
                $("#part3_4").css({
                    left: "7rem"
                });
                $("#part3_5").css({
                    left: "-7rem"
                })

            };
            if (index != 4) {
                $("#part4").css({
                    left: "-2rem"
                });
                $("#part4_1").css({
                    width: "0rem"
                });
                $("#part4_2_1").css({
                    left: "-2rem"
                });
                $("#part4_2_2").css({
                    left: "7rem"
                });
                $("#part4_2_3").css({
                    left: "-2rem"
                });
                $("#part4_3").css({
                    width: "0rem"
                });
                $("#part4_4").css({
                    left: "-6rem"
                });
                $("#part4_5").css({
                    left: "-6rem"
                });
                $("#part4_6").css({
                    left: "-6rem"
                });
                $("#part4_6_1,#part4_5_1,#part4_4_1").css({
                    right: "-7rem"
                })

            };

        },

    })
});