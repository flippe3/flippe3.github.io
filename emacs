;;Elisp made by Filip
;;M is for Alt
;;C is for Ctrl
;;;Code:
;;So you can undo very very many times
(setq undo-limit 200000000)
(setq undo-strong-limit 40000000)

;;The blue line thing 
;;(global-hl-line-mode 1)
;;(set-face-background 'hl-line "midnight blue")

;;4 space tabs in C
(setq-default indent-tabs-mode nil)
(setq c-default-style "linux"
       c-basic-offset 4)
;;Clock 24 hours
(setq display-time-format "%H:%M");change H to I for 12 hours
(display-time-mode 1)

;;Turn off the toolbar
(tool-bar-mode 0)
(scroll-bar-mode -1)

;;Cua mode enabled which is c-c c-v
(cua-mode 1)

(display-battery-mode 1)

;;Smooth scroll
(setq scroll-step 3)

(define-key global-map "\ew" 'other-window); Changes frame with alt-w
(define-key global-map "\ef" 'find-file); find file with alt f
(define-key global-map "\eF" 'find-file-other-window)
(define-key global-map "\eu" 'undo); Alt-U to undo
(define-key global-map "\eq" 'copy-region-as-kill); Copy block with Alt-Q
(define-key global-map "\e^" 'captilize-word); Alt-^ to capitilize word
(define-key global-map "\e6" 'upcase-word);M-6 to upcase word
(define-key global-map "\e^" 'captilize-word);M-^ to capitilize word
(define-key global-map "\es" 'save-buffer); M-S to
(define-key global-map "\e+" 'save-buffers-kill-terminal); Exit emacs
(define-key global-map "\e1" 'buildfile)
(define-key global-map "\e2" 'runfile)

;;Enables flycheck to always be on
;;(add-hook 'after-init-hook #'global-flycheck-mode)

;;Tab thingy
(define-key global-map [S-tab] 'indent-for-tab-command)
(define-key global-map [backtab] 'indent-for-tab-command)
(define-key global-map "\C-y" 'indent-for-tab-command)
(define-key global-map [C-tab] 'indent-region)

;;Tabbify Tab Completes words, Shift-Tab tabs
(setq dabbrev-case-replace t)
(setq dabbrev-case-fold-search t)
(setq dabbrev-upcase-means-case-search t)
(define-key global-map "\t" 'dabbrev-expand)

;; Startup windowing
(setq next-line-add-newlines nil)
(setq-default truncate-lines t)
(setq truncate-partial-width-windows nil)
;;(split-window-horizontally)

;;Theme stuff
(menu-bar-mode -1)
;;(set-foreground-color "burlywood3")
;;(set-background-color "#161616")
;;(set-face-attribute 'region nil :background "#0000FF" :foreground "#FFFFFF")
;;(set-face-foreground 'font-lock-comment-face "green")
;;(load-theme 'wombat)
;;(set-cursor-color "#40FF40")
(set-default-font "Terminus (TTF) 12")

;;Indentation
(defun indent-buffer ()                                                                                                                                                            
  "Indents an entire buffer using the default intenting scheme."                                                                                                                   
  (interactive)                                                                                                                                                                    
  (point-to-register 'o)                                                                                                                                                           
  (delete-trailing-whitespace)                                                                                                                                                     
  (indent-region (point-min) (point-max) nil)                                                                                                                                      
  (untabify (point-min) (point-max))                                                                                                                                               
  (jump-to-register 'o))                                                                                                                                                           

;;Melpa
(require 'package)
(add-to-list 'package-archives
             '("melpa" . "http://melpa.org/packages/") t)

(add-to-list 'load-path "~/.emacs.d/themes/emacs-doom-theme/")
(add-to-list 'custom-theme-load-path "~/.emacs.d/themes/emacs-doom-theme")
(require 'doom-themes)

;; Global settings (defaults)
(setq doom-themes-enable-bold t    ; if nil, bold is universally disabled
      doom-themes-enable-italic t) ; if nil, italics is universally disabled

;; Load the theme (doom-one, doom-molokai, etc); keep in mind that each theme
;; may have their own settings.
(load-theme 'doom-one t)

;; Enable flashing mode-line on errors
(doom-themes-visual-bell-config)

;; Enable custom neotree theme
(doom-themes-neotree-config)  ; all-the-icons fonts must be installed!

;; Corrects (and improves) org-mode's native fontification.
(doom-themes-org-config)



;; Make things
(defun buildfile ()
  (interactive)
  (compile '"ninja"))

;;Run ./run file
(defun runfile ()
  (interactive)
  (shell-command '"./run"))

;;indent the whole file
(global-set-key "\C-x\\" 'indent-buffer)                                                                                                                                           

(require 'cedet)
(require 'eieio)
(require 'eieio-speedbar)
(require 'eieio-opt)
(require 'eieio-base)
(require 'ede/source)
(require 'ede/base)
(require 'ede/auto)
(require 'ede/proj)
(require 'ede/proj-archive)
(require 'ede/proj-aux)
(require 'ede/proj-comp)
(require 'ede/proj-elisp)
(require 'ede/proj-info)
(require 'ede/proj-misc)
(require 'ede/proj-obj)
(require 'ede/proj-prog)
(require 'ede/proj-scheme)
(require 'ede/proj-shared)

;;ORG MODE
(require 'org)
(define-key global-map "\C-cl" 'org-store-link)
(define-key global-map "\C-ca" 'org-agenda)
(setq org-log-done t)

;CEDET Things
;;(setq package-enable-at-startup nil)
;;(package-initialize)
;;(semantic-mode 1)

;; Semantic
;;(global-semantic-idle-scheduler-mode)
;;(global-ede-mode 1)                      ; Enable the Project management system
;;(global-semantic-idle-completions-mode)
;;(global-semantic-decoration-mode)
;;(global-semantic-highlight-func-mode)
;;(global-semantic-show-unmatched-syntax-mode)
;;Fullscreen Windows
;;(w32-send-sys-command 61488)
;;Fullscreen Ubuntu
;;(toggle-frame-fullscreen)
;;Escape fullscreen
;;(global-set-key [f11] 'toggle-frame-fullscreen)

;;;END OF FILE
;;(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
;; '(package-selected-packages
;;   (quote
;;    (org use-package flycheck-color-mode-line company-irony auto-complete))))
;;(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 ;;)
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-safe-themes
   (quote
    ("2af26301bded15f5f9111d3a161b6bfb3f4b93ec34ffa95e42815396da9cb560" default)))
 '(package-selected-packages (quote (magit))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )


