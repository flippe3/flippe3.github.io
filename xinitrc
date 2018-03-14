xrandr --auto
test -d /usr/share/fonts/local && xset +fp /usr/share/fonts/local
xset fp rehash
xset -b
setxkbmap -model thinkpad -layout us
xset m 5 1
synclient TouchpadOff=1
~/dwm_status &
make -C /home/fleip/st
make -C /home/fleip/dwm
exec /home/fleip/dwm/dwm
