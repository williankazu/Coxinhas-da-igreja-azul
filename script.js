// Função para fazer pedido via WhatsApp
function fazerPedido(produto, preco) {
	const telefone = "5511989164348"; // Substitua pelo seu número de WhatsApp
	const mensagem =
		`Olá! Gostaria de fazer um pedido:\n\n` +
		`Produto: ${produto}\n` +
		`Valor: R$ ${preco.toFixed(2)}\n\n` +
		`Endereço para entrega:`;

	const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
	window.open(urlWhatsApp, "_blank");
}

// Adiciona efeito 3D nos cards
document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const angleX = (y - centerY) / 20;
			const angleY = (centerX - x) / 20;

			card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
		});

		card.addEventListener("mouseleave", () => {
			card.style.transform =
				"perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
		});
	});
});
