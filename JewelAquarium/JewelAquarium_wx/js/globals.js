

window.Particles = null;
window.maxLevel = null;
window.coins = null;
window.selectedAvatar = null;
window.soundManager = null;
window.posY = null;
window.btnGamePause = null;
window.btnGameScoreBkg = null;
window.txtPauseLabel = null;
window.btnPauseHome = null;
window.grpSceneInstructionsTop = null;
window.btnInstructionsBack = null;
window.txtInstructionsLabel = null;
window.txtInstructions = null;
window.grpSceneShopTop = null;
window.avatarprices = null;
window.sprShopStar = null;
window.txtShopStars = null;
window.btnShopBack = null;
window.txtShopLabel = null;
window.grpSceneLevelSelectionTop = null;
window.bottomMask = null;
window.btnLevelSelectionBack = null;
window.txtSceneLevelSelectionsLevels = null;
window.txtSceneLevelSelectionsUnlockedLevels = null;
window.sprGameOverStar1 = null;
window.sprGameOverStar2 = null;
window.sprGameOverStar3 = null;
window.txtGameOverStarsCount = null;
window.txtGameOverLevel = null;
window.txtGameOverState = null;
window.sprGameReviewStar1 = null;
window.txtGameReviewStarsCount = null;
window.txtGameReviewLevel = null
window.gameOverShop = null;
window.sprGameOverMaxRecord =null;
window.txtHeightScore = null;
window.txtCurScore = null;
window.levelPosY = null;
window.particlesCount = null;
window.tmpX = null;
window.tmpY = null;
window.dot = null;

window.createAudio = function (url, isLoop) {
	var audio = wx.createInnerAudioContext();
	audio.src = url;
	audio.loop = isLoop;
	return audio;
};
window.playAudio = function (audio) {
	console.log("play!!!");
	audio.seek(0);
	audio.play();
};
window.stopAudio = function (audio) {
	audio.stop();
};
window.pauseAudio = function (audio) {
	audio.pause();
};
window.resumeAudio = function (audio) {
	audio.play();
};
wx.onHide(function () {
	console.log("从前台切到后台");
   
  if (window.musicPlayer != null) {
		console.log("停止BGM");
    window.musicPlayer.pauseMusic();
	};
});
wx.onShow(function () {
	console.log("从后台切回前台");
 
  if (window.musicPlayer != null) {
		console.log("重播BGM");
    window.musicPlayer.stopMusic();
    window.musicPlayer.resumeAudio();
	};
});
wx.onAudioInterruptionEnd(function () {
	console.log("中断结束");
  if (window.musicPlayer != null) {
    window.musicPlayer.stopMusic();
    window.musicPlayer.restoreMusic();
	};
});