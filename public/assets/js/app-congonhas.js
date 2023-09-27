$(function () {
    

    // Gerencia Status de visibilidade do menu principal
    $(".main__wrapper").attr("data-collapse", false);
    $("[data-toggle-menu]").on("click", function () {
        if ($('.main__wrapper').data('collapse') == false) {
            $('.main__wrapper').data('collapse', true);
            $('.main__wrapper').attr('data-collapse', true);
        } else {
            $('.main__wrapper').data('collapse', false);
            $('.main__wrapper').attr('data-collapse', false);
        }
    })

    $(window).on("resize", function () {
        let windowSize = $(this).width();
        if (windowSize <= 1200) {
            $('.main__wrapper').data('collapse', true);
            $('.main__wrapper').attr('data-collapse', true);
        } else {
            $('.main__wrapper').data('collapse', false);
            $('.main__wrapper').attr('data-collapse', false);
        }
    })

    $(window).trigger("resize");

    // Gerencia Status de visibilidade do menu principal

    // Exibição de Menu na versão mobile
    $(".main-nav__link").on("mouseover", function(){
        if(!$(".tooltip-menu").length) {
            $("<div class='tooltip-menu'></div>").appendTo(".main__wrapper");
        }
        const positionTop = $(this).offset().top;
        const elementWidth = $(".sidebar").width();
        const text = $(this).find(".main-nav__link-text").text();
        $(".tooltip-menu").html(text)

        $(".tooltip-menu").offset({ top: positionTop, left: elementWidth + 30 });
    }).on("mouseout", function(){
        $(".tooltip-menu").remove()
    })
     // Exibição de Menu na versão mobile

    // Exibição do botão para mostrar/ocultar senha
    $(':password').each(function () {
        $(this).parents(".password-wrapper").append("<button class='toggle-password'><span class='material-symbols-outlined'>visibility</span ></button>");
    })

    $(".toggle-password").on("click", function (e) {
        e.preventDefault();
        if ($(this).find("span").html() == "visibility") {
            $(this).find("span").html("visibility_off");
            $(this).siblings(":input").attr("type", "text");
        } else {
            $(this).find("span").html("visibility");
            $(this).siblings(":input").attr("type", "password");
        }
    })
    // Exibição do botão para mostrar/ocultar senha

    // Habilitar máscara para CPF/CNPJ simultâneamente.
    $("[data-mask='cpf-cnpj']").mask('000.000.000-00', {
        onKeyPress: function (cpfcnpj, e, field, options) {
            const masks = ['000.000.000-000', '00.000.000/0000-00'];
            const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
            $("[data-mask='cpf-cnpj']").mask(mask, options);
        }
    });
    // Habilitar máscara para CPF/CNPJ simultâneamente.


    if($("#enriquecimentosTbl").length) {
        let table = new DataTable('#enriquecimentosTbl', {
            paging: false,
            searching: false,
            info: false,
            columns: [
                { orderable: false },
                { orderable: false },
                { orderable: false },
                { orderable: false },
                { orderable: true },
                { orderable: false },
                { orderable: false },
              ]
        });
    }


    if($(".upload-file__dropzone").length) {
       $(".upload-file__dropzone").dropzone({ url: "/file/post" });
    }


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    const contentGridContainer = $("[data-container='content-grid-wrapper']");
    const gridSidebartoggle = $("[data-toggle='grid-sidebar']");

    $(gridSidebartoggle).on("click", function(e){
        e.preventDefault();
        contentGridContainer.removeClass("opened");
    })

    $("#enriquecimentosTbl").on("click", "a", function(){
        contentGridContainer.addClass("opened");
    })


    const filtrosAvancados = $("#filtrosAvancados");
    const toggleFiltersButton = $("#toggleAdvancedSearch");

    filtrosAvancados.hide();
    toggleFiltersButton.on("click", function(){

        if(!$(this).hasClass("filtered")) {

            $(this).toggleClass("active").toggleClass("btn-primary btn-secondary");
            $(this).find(".icon").toggleClass("text-primary");
            filtrosAvancados.slideToggle();
        } else {
            $(this).addClass("active filtered");
            filtrosAvancados.slideDown();
        }

    })

    $("#saveFilteredData").on("click", function(){
        toggleFiltersButton.addClass("active filtered");
        toggleFiltersButton.find(".icon").removeClass("text-primary");
        filtrosAvancados.slideUp();
    })

    $("#resetFilters").on("click", function(){
        toggleFiltersButton.removeClass("active filtered").removeClass("btn-primary").addClass("btn-secondary");
        toggleFiltersButton.find(".icon").addClass("text-primary");
        filtrosAvancados.slideUp();
    })
    












































































    // Habilita carrossel de notícias da home
    $(".news-cards__wrapper").slick({
        dots: true,
        infinite: true,
        rows: 3,
        arrows: false
    });

    var slideNewsModal = document.getElementById('sliderNewsModal');
    var modalNews = bootstrap.Modal.getOrCreateInstance(slideNewsModal);


    slideNewsModal.addEventListener('shown.bs.modal', function (event) {
        $("#sliderNewsFull").slick({
            dots: true,
            appendDots: ".custom-controls-inner",
            appendArrows: ".custom-controls-inner",
        })
    })


    slideNewsModal.addEventListener('hidden.bs.modal', function (event) {
        $("#sliderNewsFull").slick('unslick');
    })

    $(".news__card").on("click", function () {
        modalNews.show()
    })
    // Habilita carrossel de notícias da home


    // Habilita carrossel de leads das páginas internas
    $(".leads-slider__wrapper ul").slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    // Habilita carrossel de leads das páginas internas


    // Gerencia exibição de certitificados
    $("#certificates").on("click", "a", function (e) {
        e.preventDefault();
        const fileName = $(this).attr("href");
        loadCertificate(e, fileName)
    })

    $("#certificates").find("a:first").trigger('click')

    function loadCertificate(e, fileName) {
        $("#certificates").find('a').removeClass('active')
        $(e.target).addClass("active")
        const fullPath = `assets/placeholders/${fileName}`;
        $("#certificatesLoader").attr('src', fullPath);
    }
    // Gerencia exibição de certitificados


    // Gerencia exibição de personas
    $("#personas").on("click", "a", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        $("#personas").find('a').removeClass('active');
        $(this).addClass("active");

        $(".custom-tab").hide();
        $(target).show();
        const imageSrc = $(target).data("bg");

        $("#bgPersonas").find("img").attr("src", imageSrc)
    })

    $("#personas").find("a:first").trigger('click')
    // Gerencia exibição de personas



    // Gerencia exibição de lista de objetivos
    $(".goals-list").on("click", '.goal-item', function (e) {
        e.preventDefault()
        $(".goals-list").find('.goal-item').removeClass("selected");
        $(this).addClass("selected");
        const text = $(this).find('dt').text();
        $("#btnGoal").text(text)
    })
    // Gerencia exibição de lista de objetivos


    // Gerencia exibição de lista de processos
    $("#processos").on("click", "a", function (e) {
        e.preventDefault();
        $("#processos").find('a').removeClass('active')
        $(this).addClass("active")

        const title = $(this).text();
        $("#processosLoader").find("h3").text(title);
    })

    $("#processos").find("a:first").trigger('click')
    // Gerencia exibição de lista de processos

    // Configurações de exibição do calendário de filtro de relatórios
    moment.locale('pt-br');
    $('input[name="dates"]').daterangepicker({
        locale: {
            cancelLabel: 'Cancelar',
            applyLabel: 'Confirmar'
        }
    });
    // Configurações de exibição do calendário de filtro de relatórios


    // Exibição de relatórios
    hideReports()
    $('[name="btnRelatorio"]').on('change', function () {
        hideReports()
        const reportId = $(this).attr('id');
        $('[data-target-report=' + reportId + ']').show()
    })

    $('[name="btnRelatorio"]:first').trigger("change")

    function hideReports() {
        $('[data-target-report]').hide();
    }


    const ctx = document.getElementById('analyticChart');

    if (ctx) {

        const labels = ["Jan/22", "Fev/22", "Mar/22", "Abr/22", "Mai/22", "Jun/22", "Jul/22", "Ago/22", "Set/22", "Out/22", "Nov/22", "Dez/22"]

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: false,
                    data: [58, 67, 35, 45, 72, 93, 85, 39, 45, 91, 56, 75],
                    backgroundColor: [
                        "#00D59A",
                        "#3A7DE8",
                        "#93a1c1",
                        "#FFAF26",
                        "#FF6565",
                        "#6456BB",
                        "#68C7AC",
                        "#71A5D5",
                        "#e2db46",
                        "#FFC27D",
                        "#FF8E8E",
                        "#8E77D4",
                    ]
                    ,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 100
                    },
                },
                transitions: {
                    show: {
                        animations: {
                            x: {
                                from: 0
                            },
                            y: {
                                from: 0
                            }
                        }
                    },
                    hide: {
                        animations: {
                            x: {
                                to: 0
                            },
                            y: {
                                to: 0
                            }
                        }
                    }
                }
            }
        });
    }
    // Exibição de relatórios

    //Gerencia menu de página de documentação
    $(".main-nav__docs").on("click", ".main-nav__link, a", function(e){
        e.preventDefault();
        const target = $(this).attr("href");
        const targetPosition = $(target).offset().top;
        const headerHeight = $(".main-header").height();
        const breadCrumbHeight = $(".breadcrumb__wrapper").height(); 
        $("body, html").animate({
             scrollTop: targetPosition - headerHeight - breadCrumbHeight - 50
        }, 500)

    })
    //Gerencia menu de página de documentação

  
    // Formulário Recarga

    //Carrega dados a partir do CEP
    if($("[data-cep]").length) {
        $("[data-cep]").on("keyup", function(){
            const cep = $(this).val();
            const totalChar = cep.replace("-","").length;
            if(totalChar === 8) {
                $.ajax(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {

                    if(response.erro) {
                        $("[data-logradouro], [data-cidade], [data-estado], [data-pais]").val('');
                        return
                    }

                    const {logradouro, localidade, uf } = response;
                    $("[data-logradouro]").val(logradouro);
                    $("[data-cidade]").val(localidade);
                    $("[data-estado]").val(uf);
                    $("[data-pais]").val("Brasil");
                    $("#paymentForm").validate()
                })
            }
            
        })
      }

    const paymentCarrosel = new Swiper('.swiper', {
        direction: "horizontal",
        allowTouchMove: false,
        autoHeight: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
      })


      let paymentCarroselInstance = null

      if(document.querySelector('.swiper')) {

          paymentCarroselInstance = document.querySelector('.swiper').swiper;
          
          enableMultiStepForm();
      }
    
    function enableMultiStepForm(){

        updateActiveStep(paymentCarroselInstance.activeIndex);   

            $("[data-prev-swiper]").on("click", function(){
                paymentCarroselInstance.slidePrev();
                console.log(paymentCarroselInstance.activeIndex);
                updateActiveStep(paymentCarroselInstance.activeIndex)
              })             
        
            $("[data-next-swiper]").on("click", function(){
                if(!$(this).attr("clicked")) {                    
                    $(this).attr("clicked", true) 
                    paymentCarroselInstance.slideNext();
                    updateActiveStep(paymentCarroselInstance.activeIndex)
                    updateFormProgressBar()
                    return 
                }
                paymentCarroselInstance.slideNext();
                updateActiveStep(paymentCarroselInstance.activeIndex)
            })                 

            var slider = $("#customPlanRange")[0];
            if(slider) {
                var output = $("#customPlanConsults");
                $(output).html($.number( slider.value, 0, '.' )); 
                $("#customPlanTotal").html((slider.value * 0.2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            
                slider.oninput = function() {
                    output.html($.number( slider.value, 0, '.' ));
                    let totalValue = (this.value * 0.2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    $("#customPlanTotal").text(totalValue)
                }        
            }

            function updateActiveStep(index) {
                const currentIndex = index + 1

                $(".multi-step-form").find("[data-step").removeClass("active");
                $(".steps-indicator").find("[data-step").removeClass("active");  
                $(".multi-step-form").find("[data-step="+currentIndex+"]").addClass("active");
                $(".steps-indicator").find("[data-step="+currentIndex+"]").addClass("active");   
            }
    }

    let currentStep = 1;
    const totalSteps = 3;
    const amountByStep = Number(100 / totalSteps);
    function updateFormProgressBar(){

        $("#formProgressBar").animate({
            width: (amountByStep * currentStep)+"%"
        },500, function(){
            currentStep++

            $(".steps-indicator").find("[data-step]").removeClass("active");
            $(".steps-indicator").find("[data-step="+currentStep+"]").addClass("active");
        })
    }
    


    // Copia código PIX
    function copyToClipboard(element) {
        var aux = document.createElement("input");       
        aux.setAttribute("value", document.querySelector(element).value);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);      
      }

      $("#pixCodeCopiedMessage").hide();

      $("#pixCodeButton").on("click", function(){
        copyToClipboard("#pixCode");
        $("#pixCodeCopiedMessage").fadeIn(200).delay(2000).fadeOut(200);
      })
    // Copia Código PIX

      $(".plans-wrapper .plan-item").on("click", function(){
        $(".plans-wrapper .plan-item").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".step-item").find("[data-type='next-step']").prop("disabled", false);
        $(this).parents(".step-item").find("[data-next-swiper]").prop("disabled", false);
        const planPrice = $(this).find(".price").text();
        $("[data-valor-plano]").text(planPrice)
      })

      $(".payment-methods").on("click", ".nav-link", function(){
        $(this).parents(".step-item").find("[data-type='next-step']").prop("disabled", false);
        $(this).parents(".step-item").find("[data-next-swiper]").prop("disabled", false);
        if($(this).attr("id") === "pix-tab") {
            $("#submitCreditCard").hide();
            $("#submitPix").css('display', 'flex');
        } else {
            $("#submitCreditCard").css('display', 'flex');
            $("#submitPix").hide();
        }
      })   
      
      if($("#paymentForm").length) {
        $("#paymentForm").validate({

            invalidHandler: function(){
                setTimeout(() => {

                    paymentCarroselInstance.updateAutoHeight()
                },300)
            },

            submitHandler: function(form, event) {
                event.preventDefault();
                //ENVIAR FORMULÁRIO
                    // Lógica aqui (requisição ajax, post, etc)
                    //
                    //                 
                //Navegar para último slide.
                updateFormProgressBar()
                paymentCarroselInstance.slideNext();
              },
              rules: {
                cep: {
                    required: true,
                    minlength: 9
                },
                logradouro: "required",
                cidade: "required",
                estado: "required",
                pais: "required",
                cpf_cnpj: "required",
                email: "required",
                telefone: "required",
                numero_cartao: "required",
                titular_cartao: "required",
                expiracao_cartao: "required",
                cvv_cartao: "required",
              }, 
              messages: {
                cep: {
                    required: "Insira seu CEP",
                    minlength: "O CEP deve ter 8 dígitos"
                },
                logradouro: "Preencha seu endereço",
                cidade: "Preencha sua cidade",
                estado: "Preencha seu estado",
                pais: "Preencha seu país",
                cpf_cnpj: "Preencha seu CPF/CNPJ",
                email: "Preencha seu e-mail",
                telefone: "Preencha seu telefone",
                numero_cartao: "Insira o número do cartão",
                titular_cartao: "Insira o titular do cartão",
                expiracao_cartao: "Insira o vencimento do cartão",
                cvv_cartao: "Insira o código de segurança",                
              }              
        })
      }   
      // Formulário Recarga
      
       
      // Habilita interação de animação do cartão de crédito

      if(document.querySelector('#card-number')) {
        enableCreditCardSimulation();

      }

      function enableCreditCardSimulation(){
        const cardNumberInput = document.querySelector('#card-number');
        const cardHolderInput = document.querySelector('#card-holder');
        const expiryInput = document.querySelector('#expiry');
        const cvvInput = document.querySelector('#cvv');
        // const cvvHolder = document.querySelector('#cvv-holder');
        
        const cardNumberElement = document.querySelector('.card-number');
        const cardHolderElement = document.querySelector('.card-holder');
        const cardExpiryElement = document.querySelector('.card-expiry');
        const cardCvvElement = document.querySelector('.card-cvv');
        
        cardNumberInput.addEventListener('input', updateCardNumber);
        cardHolderInput.addEventListener('input', updateCardHolder);
        expiryInput.addEventListener('input', updateCardExpiry);
        cvvInput.addEventListener('keyup', updateCVVNumber);
        cvvInput.addEventListener('focus', flipCard);
        cvvInput.addEventListener('input', handleCVVInput);
        cvvInput.addEventListener('blur', unflipCard);
        
        function updateCardNumber() {
          const cardNumber = cardNumberInput.value;
          cardNumberElement.value = cardNumber;
        }
        
        function updateCardHolder() {
          const cardHolder = cardHolderInput.value;
          cardHolderElement.value = cardHolder;
        }
        
        function updateCardExpiry() {
          const expiry = expiryInput.value;
          cardExpiryElement.value = expiry;
        }
        
        function updateCVVNumber() {
            const cvv = cvvInput.value;
            cardCvvElement.value = cvv;
          }
        
        
        function handleCVVInput() {
          if (cvvInput.value.length === 3) {
        
            unflipCard();
          } else {
            flipCard();
          }
        
        }
        
        function flipCard() {
          gsap.to('.card', { duration: 0.5, rotationY: -180 });
        }
        
        function unflipCard() {
          gsap.to('.card', { duration: 0.5, rotationY: 0 });
        }
        
      }
      // Habilita interação de animação do cartão de crédito




})