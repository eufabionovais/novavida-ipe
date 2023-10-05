$(function () {
  // Gerencia Status de visibilidade do menu principal
  $(".main__wrapper").attr("data-collapse", false);
  $("[data-toggle-menu]").on("click", function () {
    if ($(".main__wrapper").data("collapse") == false) {
      $(".main__wrapper").data("collapse", true);
      $(".main__wrapper").attr("data-collapse", true);
    } else {
      $(".main__wrapper").data("collapse", false);
      $(".main__wrapper").attr("data-collapse", false);
    }
  });

  $(window).on("resize", function () {
    let windowSize = $(this).width();
    if (windowSize <= 1200) {
      $(".main__wrapper").data("collapse", true);
      $(".main__wrapper").attr("data-collapse", true);
    } else {
      $(".main__wrapper").data("collapse", false);
      $(".main__wrapper").attr("data-collapse", false);
    }
  });

  $(window).trigger("resize");

  // Gerencia Status de visibilidade do menu principal

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
        "<button class='toggle-password'><span class='material-symbols-outlined'>visibility</span ></button>",
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
  $("[data-mask='cpf-cnpj']").mask("000.000.000-00", {
    onKeyPress: function (cpfcnpj, e, field, options) {
      const masks = ["000.000.000-000", "00.000.000/0000-00"];
      const mask = cpfcnpj.length > 14 ? masks[1] : masks[0];
      $("[data-mask='cpf-cnpj']").mask(mask, options);
    },
  });
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

  if ($(".upload-file__dropzone").length) {
    $(".upload-file__dropzone").dropzone({ url: "/file/post" });
  }

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
  );

  const contentGridContainer = $("[data-container='content-grid-wrapper']");
  const gridSidebartoggle = $("[data-toggle='grid-sidebar']");

  $(gridSidebartoggle).on("click", function (e) {
    e.preventDefault();
    contentGridContainer.removeClass("opened");
  });

  $("#enriquecimentosTbl").on("click", "a", function () {
    contentGridContainer.addClass("opened");
  });

  $("#estudosTbl").on("click", "a", function () {
    contentGridContainer.addClass("opened");
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

  const swiperElement = document.querySelector(".swiper");
  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      speed: 400,
      spaceBetween: 100,
    });

    const swiperInstance = swiperElement.swiper;

    console.log("index", swiperInstance.activeIndex);

    $("[data-slider='prev']").prop("disabled", true);

    $("[data-slider='prev']").on("click", function () {
      swiperInstance.slidePrev();
    });

    $("[data-slider='next']").on("click", function () {
      swiperInstance.slideNext();
    });

    swiperInstance.on("slideChange", function () {
      const currentIndex = swiperInstance.realIndex;
      const totalSlides = swiperInstance.slides.length - 1;

      console.log(totalSlides);

      if (currentIndex === 0) {
        $("[data-slider='prev']").prop("disabled", true);
      } else {
        $("[data-slider='prev']").prop("disabled", false);
      }
      if (currentIndex >= totalSlides) {
        $("[data-slider='next']").prop("disabled", true);
      } else {
        $("[data-slider='next']").prop("disabled", false);
      }
    });
  }
});
