function animateCharts() {
  const boxes = document.querySelectorAll(".chart-item");
  const boxesTimeline = boxes.forEach((box) => {
    boxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
      },
    });

    boxTimeline.to(box, { opacity: 1, y: 0, duration: 0.8 });
  });
}

function hideAllCharts() {
  const boxes = document.querySelectorAll(".chart-item");
  gsap.set(boxes, { opacity: 0, y: 50 });
}

function totalDiasDoMes(mes, ano) {
  return new Date(ano, mes, 0).getDate();
}

function resizeGraficos() {
  setTimeout(() => {
    graficoIndicadoresGerais.resize();
  }, 300);
}
