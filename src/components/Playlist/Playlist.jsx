import React from 'react'
import './playlist.css'
import CdCover from '../../assets/cd-cover.png'

const Playlist = () => {
    return (
      <section id="playlist">
        <div class="container spotify__section">
            <div class="spotify__container">
                <div class="spotify__left">
                    <div class="spotify__text">
                        <h1>if you read this far,<br />
                            you <span>deserve</span> this.
                        </h1>
                        <div class="spotify__line"></div>
                    </div>
                </div>
                <div class="spotify__right">
                    <div class="playlist__container" onmouseover="hideCdCover()" onmouseleave="restCdCoverState()">
                        <img src={CdCover} id="cd-cover" class="cd-rotation" alt=""/>
                        <iframe src="https://open.spotify.com/embed/playlist/19qFWIid6oivwJTSCaz0Mf?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="#"></iframe>
                    </div>
                    <div class="spotify__button">
                        <a href="https://open.spotify.com/playlist/19qFWIid6oivwJTSCaz0Mf?go=1&sp_cid=8107d984953588b1af777e03b6974b22&utm_source=embed_player_m&utm_medium=desktop&nd=1" target="_blank" rel="noreferrer">PLAY ON SPOTIFY</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default Playlist