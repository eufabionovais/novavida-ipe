gsap.registerPlugin(ScrollTrigger);

$(function () {
  // Gerencia Status de visibilidade do menu principal
  $("body").attr("data-collapse", false);
  $("[data-toggle-menu]").on("click", function () {
    if ($("body").data("collapse") == false) {
      $("body").data("collapse", true);
      $("body").attr("data-collapse", true);
    } else {
      $("body").data("collapse", false);
      $("body").attr("data-collapse", false);
    }
    resizeGraficos();
    posicionaSubmenus();
  });

  $(window).on("resize", function () {
    let windowSize = $(this).width();
    if (windowSize <= 1200) {
      $("body").data("collapse", true);
      $("body").attr("data-collapse", true);
    } else {
      $("body").data("collapse", false);
      $("body").attr("data-collapse", false);
    }
    resizeGraficos();
  });

  $(window).trigger("resize");

  // Gerencia Status de visibilidade do menu principal

  //Popover

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, { html: true });
  });
  //Popover

  // Exibição de Menu na versão mobile
  $(".main-nav__link")
    .on("mouseover", function () {
      if (!$(".tooltip-menu").length) {
        $("<div class='tooltip-menu'></div>").appendTo(".main__wrapper");
      }
      const positionTop = $(this).offset().top;
      const elementWidth = $(".sidebar").width();
      const text = $(this).find(".main-nav__link-text").text();
      $(".tooltip-menu").html(text);

      $(".tooltip-menu").offset({ top: positionTop, left: elementWidth + 30 });
    })
    .on("mouseout", function () {
      $(".tooltip-menu").remove();
    });
  // Exibição de Menu na versão mobile

  // Exibição do botão para mostrar/ocultar senha
  $(":password").each(function () {
    $(this)
      .parents(".password-wrapper")
      .append(
        "<button class='toggle-password'><span class='material-symbols-outlined'>visibility</span ></button>"
      );
  });

  $(".toggle-password").on("click", function (e) {
    e.preventDefault();
    if ($(this).find("span").html() == "visibility") {
      $(this).find("span").html("visibility_off");
      $(this).siblings(":input").attr("type", "text");
    } else {
      $(this).find("span").html("visibility");
      $(this).siblings(":input").attr("type", "password");
    }
  });
  // Exibição do botão para mostrar/ocultar senha

  // Habilitar máscara para CPF/CNPJ simultâneamente.
  if ($("[data-mask='cpf-cnpj']").length) {
    $("[data-mask='cpf-cnpj']").mask("000.000.000-00", {
      onKeyPress: function (cpfcnpj, e, field, options) {
        const masks = ["000.000.000-000", "00.000.000/0000-00"];
        const mask = cpfcnpj.length > 14 ? masks[1] : masks[0];
        $("[data-mask='cpf-cnpj']").mask(mask, options);
      },
    });
  }
  // Habilitar máscara para CPF/CNPJ simultâneamente.

  if ($("#enriquecimentosTbl").length) {
    let table = new DataTable("#enriquecimentosTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: false },
        { orderable: false, width: "25%" },
        { orderable: false },
        { orderable: false },
        { orderable: true },
        { orderable: false },
        { orderable: false, width: "150px", className: "text--center" },
      ],
    });

    $("#enriquecimentosTbl").on("click", "a", function () {
      contentGridContainer.addClass("opened");
    });
  }

  if ($("#estudosTbl").length) {
    let table = new DataTable("#estudosTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: false },
        { orderable: false },
        { orderable: false, width: "25%" },
        { orderable: false },
        { orderable: true },
        { orderable: false },
        { orderable: false, width: "150px", className: "text--center" },
      ],
    });

    $("#estudosTbl").on("click", "a:not(.btn-chart)", function () {
      contentGridContainer.addClass("opened");
    });
  }

  if ($("#layoutsTbl").length) {
    let table = new DataTable("#layoutsTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: false },
        { orderable: false },
        { orderable: false, width: "25%" },
        { orderable: false },
        { orderable: true },
        { orderable: false },
        { orderable: false, width: "150px", className: "text--center" },
      ],
    });
  }

  if ($("#campanhasTbl").length) {
    let table = new DataTable("#campanhasTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: false, width: "60%" },
        { orderable: false },
        { orderable: false },
        { orderable: false, width: "200px", className: "text--center" },
      ],
    });
  }

  if ($("#enviosTbl").length) {
    let table = new DataTable("#enviosTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: true, width: "30%" },
        { orderable: false },
        { orderable: false, className: "text--center" },
        { orderable: false, className: "text--center" },
      ],
    });
  }

  if ($("#blackListsTbl").length) {
    let table = new DataTable("#blackListsTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: true },
        { orderable: false },
        { orderable: false, className: "text--center" },
        { orderable: false, className: "text--left" },
        { orderable: false, className: "text--center" },
      ],
    });
  }

  if ($("#prefefinidasTbl").length) {
    let table = new DataTable("#prefefinidasTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [
        { orderable: true },
        { orderable: false },
        { orderable: false },
        { orderable: false, className: "text--center" },
      ],
    });
  }

  if ($("#contatosTbl").length) {
    let table = new DataTable("#contatosTbl", {
      paging: false,
      searching: false,
      info: false,
      columns: [{ orderable: true, width: "80%" }, { orderable: false }],
    });
  }

  if ($(".upload-file__dropzone").length) {
    $(".upload-file__dropzone").dropzone({ url: "/file/post" });
  }

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  const contentGridContainer = $("[data-container='content-grid-wrapper']");
  const gridSidebartoggle = $("[data-toggle='grid-sidebar']");

  $(gridSidebartoggle).on("click", function (e) {
    e.preventDefault();
    contentGridContainer.removeClass("opened");
  });

  const filtrosAvancados = $("#filtrosAvancados");
  const toggleFiltersButton = $("#toggleAdvancedSearch");

  filtrosAvancados.hide();
  toggleFiltersButton.on("click", function () {
    if (!$(this).hasClass("filtered")) {
      $(this).toggleClass("active").toggleClass("btn-primary btn-secondary");
      $(this).find(".icon").toggleClass("text-primary");
      filtrosAvancados.slideToggle();
    } else {
      $(this).addClass("active filtered");
      filtrosAvancados.slideDown();
    }
  });

  $("#saveFilteredData").on("click", function () {
    toggleFiltersButton.addClass("active filtered");
    toggleFiltersButton.find(".icon").removeClass("text-primary");
    filtrosAvancados.slideUp();
  });

  $("#resetFilters").on("click", function () {
    toggleFiltersButton
      .removeClass("active filtered")
      .removeClass("btn-primary")
      .addClass("btn-secondary");
    toggleFiltersButton.find(".icon").addClass("text-primary");
    filtrosAvancados.slideUp();
  });

  if ($(".dropdown-toggle").length) {
    $(".dropdown-toggle").dropdown();
  }

  if ($("[data-input-group]").length) {
    $("[data-input-group]").on("keyup", function () {
      let value = $(this).val();
      let valueLength = value.length;
      if (valueLength > 0) {
        $(this)
          .siblings(".input-group-text")
          .find(".btn")
          .removeAttr("disabled");
      } else {
        $(this)
          .siblings(".input-group-text")
          .find(".btn")
          .attr("disabled", true);
      }
    });
  }

  $("#btnConfirmarLayout").on("click", function () {
    $("#novoLayoutDialog").modal("hide");
    $("#confirmarLayoutDialog").modal("show");
  });

  $("#btnVoltarNovoLayout").on("click", function () {
    $("#confirmarLayoutDialog").modal("hide");
    $("#novoLayoutDialog").modal("show");
  });

  const swiperElement = document.querySelector(".swiper");
  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      speed: 400,
      spaceBetween: 100,
      autoHeight: true,
      allowTouchMove: false,
      prevEl: ".btn-swiper-prev",
      nextEl: ".btn-swiper-next",
      on: {
        init: function () {
          checkBlockSliderButtons(this);
          hideAllCharts();
          animateCharts();
        },

        slideChange: function () {
          hideAllCharts();

          window.scrollTo({ top: 0, left: 0, behavior: "instant" });

          const currentIndex = this.realIndex;
          const slideTitulo = this.slides[currentIndex].dataset.titulo;
          $("#slideTitle").html(slideTitulo);
          animateCharts();
        },

        slideChangeTransitionEnd: function () {
          hideAllCharts();
          animateCharts();
          checkBlockSliderButtons(this);
        },
      },
    });

    function checkBlockSliderButtons(target) {
      if (target.isBeginning) {
        $(".btn-swiper-prev").attr("disabled", "disabled");
        $(".btn-swiper-next").removeAttr("disabled");
      } else if (target.isEnd) {
        $(".btn-swiper-next").attr("disabled", "disabled");
        $(".btn-swiper-prev").removeAttr("disabled");
      } else {
        $(".btn-swiper-prev, .btn-swiper-next").removeAttr("disabled");
      }
    }

    const swiperInstance = swiperElement.swiper;

    swiperInstance.on("slideChangeTransitionEnd", function () {});

    $(".btn-swiper-prev").on("click", function () {
      if (swiperInstance.isBeginning) {
        return;
      }
      swiperInstance.slidePrev();
    });

    $(".btn-swiper-next").on("click", function () {
      if (swiperInstance.isEnd) {
        return;
      }
      swiperInstance.slideNext();
    });
  }

  posicionaSubmenus();

  function posicionaSubmenus() {
    $(".main-nav__item").each(function () {
      const submenu = $(this).children(".submenu");
      if (submenu.length) {
        const width = $(this)[0].offsetWidth;
        const top = $(this)[0].offsetTop;
        const left = $(this)[0].offsetLeft;
        submenu.css({
          top: top,
          left: width + left,
        });
      }
    });
  }

  // Envios

  if ($("[name='tipoListaContatos']").length) {
    $("[name='tipoListaContatos']").on("change", function () {
      const tipoListaSelecionada = $(this).val();
      $(".tipo-lista").attr("hidden", "hidden");
      $("#" + tipoListaSelecionada).removeAttr("hidden");
    });
  }

  if ($("[name='tipoMensagem']").length) {
    $("[name='tipoMensagem']").on("change", function () {
      const tipoMensagemSelecionada = $(this).val();
      $(".tipo-mensagem").attr("hidden", "hidden");
      $("#" + tipoMensagemSelecionada).removeAttr("hidden");
    });
  }

  if ($("[name='tipoEnvio']").length) {
    $("[name='tipoEnvio']").on("change", function () {
      const tipoEnvio = $(this).val();

      console.log(tipoEnvio);

      if (tipoEnvio === "conteudoEnvioAgendado") {
        $(".tipo-envio").attr("hidden", "hidden");
        $("#" + tipoEnvio).removeAttr("hidden");
      } else {
        $(".tipo-envio").attr("hidden", "hidden");
      }
    });
  }

  if ($("textarea.form-control").length) {
    $("textarea.form-control").each(function () {
      const _this = $(this);
      const counter = _this.next(".message-counter");
      const maxLength = _this.attr("maxlength");
      counter.html(`0 / ${maxLength}`);

      _this.on("keyup focus", function () {
        const inputLength = _this.val().length;
        counter.html(`${inputLength} / ${maxLength}`);
      });
    });
  }

  if ($(".message-variable-pill").length) {
    $(".message-variable-pill").on("click", function () {
      const campoMensagem = $("#textoMensagem");
      const mensagem = campoMensagem.val();
      const nomeVariavel = $(this).data("nome-variavel");
      campoMensagem.val(mensagem + nomeVariavel);
      campoMensagem.focus();
    });
  }

  // if ($("#modalNovoEnvio").length) {
  //   $("#modalNovoEnvio").modal("show");
  // }

  let tabEnviosAtivaIndex = 0;
  $("#btnProximoPassoEnvio").on("click", function () {
    tabEnviosAtivaIndex++;

    navegarParaAbaEnvioAtual(tabEnviosAtivaIndex);

    if (tabEnviosAtivaIndex > 0) {
      $("#btnPassoAnteriorEnvio").removeAttr("disabled");
    }
  });

  $("#btnPassoAnteriorEnvio").on("click", function () {
    tabEnviosAtivaIndex--;

    navegarParaAbaEnvioAtual(tabEnviosAtivaIndex);
  });

  function navegarParaAbaEnvioAtual(tabEnviosAtivaIndex) {
    $(".nav-tabs-envios").find(".nav-link").removeClass("active");
    $(".nav-tabs-envios")
      .find(".nav-link:eq(" + tabEnviosAtivaIndex + ")")
      .addClass("active")
      .removeAttr("disabled");

    $(".tabs-envios").find(".tab-pane.active").removeClass("active show");
    $(".tabs-envios")
      .find(".tab-pane:eq(" + tabEnviosAtivaIndex + ")")
      .addClass("active show");
  }
});
